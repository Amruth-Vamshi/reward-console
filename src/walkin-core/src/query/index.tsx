import gql from "graphql-tag";

export const FILE_UPLOAD = gql`
  mutation uploadFile($input: FileUploadInput!) {
    uploadFile(input: $input) {
      id
      name
      mimetype
      encoding
      description
      internalUrl
      publicUrl
      status
      organization {
        id
      }
      fileSystem {
        id
        name
      }
    }
  }
`;

export const CREATE_FILE_SYSTEM = gql`
  mutation createFileSystem($input: CreateFileSystemInput!) {
    createFileSystem(input: $input) {
      id
      name
      description
      accessType
      fileSystemType
      configuration
      enabled
      status
      organization {
        id
      }
    }
  }
`;
