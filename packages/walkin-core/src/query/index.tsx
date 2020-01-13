import gql from 'graphql-tag'


export const FILE_UPLOAD = gql`
    mutation uploadFile($input:FileUploadInput!){
        uploadFile(input:$input){
            id
            description
            publicUrl
            status
        }
    }

`

export const CREATE_FILE_SYSTEM = gql`
       mutation createFileSystem(
        $input: CreateFileSystemInput!
       ) {
        createFileSystem(
            input:$input
        ){
            id
            name
            description
            accessType
            fileSystemType
            configuration
            enabled
            status
            organization{
                id
                
            }
        }
       }

`