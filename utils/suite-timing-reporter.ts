import type { Reporter, TestCase, TestResult, FullResult } from '@playwright/test/reporter';
import { existsSync, appendFileSync, writeFileSync } from 'fs';

interface SuiteTiming {
  start: number;
  end: number;
}

class SuiteTimingReporter implements Reporter {
  private timings = new Map<string, SuiteTiming>();

  onTestEnd(test: TestCase, result: TestResult) {
    const suiteName = test.parent?.title;
    if (!suiteName) return;

    const start = result.startTime.getTime();
    const end = start + result.duration;
    const existing = this.timings.get(suiteName);

    if (!existing) {
      this.timings.set(suiteName, { start, end });
    } else {
      this.timings.set(suiteName, {
        start: Math.min(existing.start, start),
        end: Math.max(existing.end, end),
      });
    }
  }

  onEnd(_result: FullResult) {
    if (this.timings.size === 0) return;

    const lines: string[] = [];
    const fmt = (ms: number) => {
      const d = new Date(ms);
      const pad = (n: number) => String(n).padStart(2, '0');
      return `${String(d.getFullYear()).slice(2)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };

    for (const [name, { start, end }] of this.timings) {
      const totalSec = Math.round((end - start) / 1000);
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      const duration = m > 0 ? `${m}m ${s}s` : `${s}s`;
      const key = name.replace(/[\s=\n\r]/g, '_');
      lines.push(`${key} = ${fmt(start)} ~ ${fmt(end)} | 소요시간: ${duration}`);
    }

    const file = 'allure-results/environment.properties';
    const content = lines.join('\n') + '\n';
    try {
      existsSync(file)
        ? appendFileSync(file, content, 'utf-8')
        : writeFileSync(file, content, 'utf-8');
    } catch {}
  }
}

export default SuiteTimingReporter;
