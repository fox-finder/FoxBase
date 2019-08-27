/**
 * File uitls.
 * @file Mode transfer
 * @module utils/file
 * @author Surmon <https://github.com/surmon-china>
 */

import { convert } from 'unix-permissions';

export function transformStatModeToOctal(mode: string): string {
  return convert.octal(mode);
}

export function transformOctalModeToStat(mode: string | number): string {
  return convert.stat(Number(mode));
}
