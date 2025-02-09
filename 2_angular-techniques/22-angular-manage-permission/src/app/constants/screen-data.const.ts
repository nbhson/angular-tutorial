export const screenData = {
  user: {
    actionAvailable: ['add', 'update', 'delete'],
    tableDataColumns: ['id', 'firstName', 'lastName', 'createdAt']
  },
  category: {
    actionAvailable: ['add', 'update', 'delete'],
    tableDataColumns: ['id', 'name', 'image', 'createdAt']
  },
  product: {
    actionAvailable: ['add', 'update', 'delete', 'filter'],
    tableDataColumns: ['id', 'name', 'categoryName', 'createdAt']
  }
}
