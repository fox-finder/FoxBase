/**
 * Interfaces of file.
 * @file File & FileProvider
 * @module interfaces/file
 * @author Surmon <https://github.com/surmon-china>
 */

export enum FileType {
  File = 'file',
  Directory = 'directory',
}

export interface IFileExtra {
  [key: string]: object;
}

export interface IFile<T extends IFileExtra = IFileExtra> {
  type: FileType;
  name: string;
  path: string; // full file path
  size: number; // file size
  ext?: string; // file ext
  modify_at: number;
  access_at?: number;
  create_at?: number;
  readable: boolean;
  writeable: boolean;
  unix_mode_stat?: string; // unix file mode stat string format, like: 'r----x--x'
  unix_mode_octal?: string; // unix file mode octal string format, like: '0777'
  uid?: string; // unix file uid
  gid?: string; // unix file gid
  extra?: T;
}

export interface IDirectoryState<T extends IFileExtra = IFileExtra> extends IFile<T> {
  fileCount: number;
}

export enum FileActionStatus {
  Success = 'success',
  Failed = 'failed',
}

export interface FileActionResult {
  status: FileActionStatus;
  info?: string;
}

export declare class FileProvider {
  constructor(options: any);
  // dir
  readDir(path: string): Promise<IDirectoryState>;
  makeDir(path: string): Promise<FileActionResult>;
  // file
  readFile(path: string): Promise<Buffer>;
  listFile(path: string, keyword?: string): Promise<IFile[]>;
  writeFile(path: string, data: Buffer): Promise<FileActionResult>;
  // general
  copy(srcPath: string, destPath: string): Promise<FileActionResult>;
  move(srcPath: string, destPath: string): Promise<FileActionResult>;
  rename(srcPath: string, destPath: string): Promise<FileActionResult>;
  remove(path: string): Promise<FileActionResult>;
  // unix
  chmod?(path: string, mode: string): Promise<FileActionResult>;
}
