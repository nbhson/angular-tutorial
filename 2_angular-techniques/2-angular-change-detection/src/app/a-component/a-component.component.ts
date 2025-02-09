import { Component, OnInit, ChangeDetectorRef, NgZone} from '@angular/core';
import { TodoApiService, TodoDto } from 'src/api/todo.api';
import { User } from '../interface/user';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.scss']
})
export class AComponentComponent implements OnInit {

  soccer: number = 1
  
  user: User = {
    name: 'Sơn',
    age: 20
  }

  numberArr: number[] = [10]

  todos: TodoDto[] = []

  constructor(
    private cdr: ChangeDetectorRef, 
    private ngZone: NgZone,
    private todoService: TodoApiService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* ExpressionChangedAfterItHasBeenCheckedError issue*/
    // this.soccer = 50; 
    // this.user.age = 24
    // this.numberArr.push(20)

    /* cách fix 1: đưa giá trị muốn thay đổi sang turn sau - timmer */
    // setTimeout(() => {
    //   this.soccer = 50; 
    //   this.user.age = 24
    //   this.numberArr.push(20)
    // }, 0);

    /* cách fix 2: inject ChangeDetectorRef */
    // this.soccer = 50; 
    // this.user.age = 24
    // this.numberArr.push(20)
    // this.cdr.detectChanges();
    
    /* cách fix 3: chạy mà không đụng tới thằng zone.js */
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this.soccer = 50; 
    //     console.log(this.soccer); // 50

    //     // không update được value trên view
    //     // do chạy bên ngoài angular nên thằng zone không thông báo cho angular biết
    //     // là thằng này đã change
    //     // this.cdr.detectChanges() // dòng này để báo angular biết là data đã thay đổi
    //   }, 0);
    // })

    // this.todos.push({
    //   id: 1,
    //   title: 'Get up',
    //   completed: false,
    //   userId: 43
    // })

    // this.todoService.getTodo().subscribe((data) => {
    //   this.todos = data
    // })
  }
}
