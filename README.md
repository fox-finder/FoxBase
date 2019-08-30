
# FoxBase

Base modules for [@fox-finder](https://github.com/fox-finder)

## Usage

```bash
yarn add @fox-finder/base
```

```typescript
import MyFsService from 'my-fs-service';
import { IFile, FoxFileProvider } from '@fox-finder/base'

export class MyFileProvider implements FoxFileProvider {

  constructor(options) {
    this.myFsService = new MyFsService(options)
  }

  listFile(path: string, keyword?: string): Promise<IFile[]> {
    return new Promise((resolve, reject) => {
      return this.myFsService.getFileList(path, fileList => {
        resolve(fileList.map(file => ({
          // ...
        })))
      })
    });
  }

  // other methods...
}
```

## Acknowledgements

- [unix-permissions](https://github.com/ehmicky/unix-permissions)
