
# FoxBase

Base modules for @fox-finder

## how to use

### install
```bash
npm i @fox-finder/base
```

### require
```typescript
import { Client, rest } from '@fox-finder/base'

const client: Client = new Client({ /* config */ })

// connect
client.connect().then(() => {

  // methods
  client.getFiles('/path').then((data: IFile[]) => {
    console.log('files:', data)
  })

  client.deleteFiles(['/path/file1', '/path/file2']).then((data: any) => {
    console.log('result:', data)
  })

  // more methods...

  // exec
  client.exec('ls').then((data: string) => {
    console.log('exec result:', data)
  })

  // destroy
  client.destroy()
})
```

## 依赖的项目

- ssh2
