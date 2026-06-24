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
    for (const [name, { start, end }] of this.timings) {
      const duration = ((end - start) / 1000).toFixed(1);
      const key = name.replace(/[\s=\n\r]/g, '_');
      lines.push(`${key}=${duration}s`);
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
