
import { FoxBaseProvider } from '../base/provider';
import { IFile, IFileStat } from './file.interface';

export declare class FoxFileProvider<T = any> extends FoxBaseProvider<T> {
  // dir
  makeDir(path: string, octalMode?: number): Promise<any>;
  // file
  readFile(path: string): Promise<Buffer>;
  listFile(path: string, keyword?: string): Promise<IFile[]>;
  writeFile(path: string, data: Buffer, octalMode?: number): Promise<any>;
  // general
  stat(path: string): Promise<IFileStat>;
  copy(srcPath: string, destPath: string): Promise<any>;
  move(srcPath: string, destPath: string): Promise<any>;
  rename(srcPath: string, destPath: string): Promise<any>;
  remove(path: string): Promise<any>;
  // unix
  chmod?(path: string, octalMode?: number): Promise<any>;
}
