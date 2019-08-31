
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
  unix?: {
    mode_stat?: string; // unix file mode stat string format, like: 'r----x--x'
    mode_octal?: string; // unix file mode octal string format, like: '0777'
    uid?: string; // unix file uid
    gid?: string; // unix file gid
  };
  extra?: T;
}

export interface IFileStat<T extends IFileExtra = IFileExtra> extends IFile<T> {
  // may be md5
  total_size?: number;
  file_count?: number;
  directory_count?: number;
}