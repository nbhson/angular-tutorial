import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  userRole!: Array<any>;

  constructor() {}

  hasPermission(module: string | undefined, permission: string | undefined): boolean {
    this.getUserInfo();
    const modulePermission: number = this.userRole.findIndex((permission: any) => permission.moduleName === module);
    if (modulePermission >= 0 && this.userRole) {
      const hasPermission = this.userRole[modulePermission].canBe.includes(permission);
      if (hasPermission) {
        return true
      }
    }
    return false;
  }

  private getUserInfo() {
    const userPermission = {
      name: 'Son Nguyen',
      permissions: [
        {
          moduleName: 'user',
          canBe: ['View']
        },
        {
          moduleName: 'category',
          canBe: ['View', 'Add', 'Update']
        },
        {
          moduleName: 'product',
          canBe: ['View', 'Add', 'Update', 'Delete']
        }
      ]
    }
    this.userRole = userPermission.permissions;
  }
}
