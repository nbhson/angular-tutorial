import { AppComponent } from "./app.component"

describe('', () => {
  let appComponent: AppComponent;

  beforeEach(() => {
    appComponent = new AppComponent();
  })

  it('should have a title AngularJestSetup', () => {
    expect(appComponent.title).toEqual('AngularJestSetup')
  })

  it('adds 1 + 2 to equal 3', () => {
    expect(appComponent.sum(1, 2)).toEqual(3)
  })
})