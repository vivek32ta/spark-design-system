import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SprkFormatterDateDirective } from './sprk-formatter-date.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
  <input 
  value="hi"
  type="text"
  placeholder="Enter some input."
  sprk-formatter-date>
  `
})
class TestComponent {};

fdescribe('SprkFormatterDateDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkFormatterDateDirective,
        TestComponent
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
  });

  it('should do nothing if there is no value', () => {
    inputElement.nativeElement.value = '';
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('');
  });

  it('should do nothing if the value is not a value that can be formatted', () => {
    inputElement.nativeElement.value = 'abc';
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('abc');
  });

  it('should format into MM/DD/YYYY if the value can be formatted (just numbers)', () => {
    inputElement.nativeElement.value = '11221234';
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('11/22/1234');
  });

  it('should format into MM/DD/YYYY if the value can be formatted (dashes)', () => {
    inputElement.nativeElement.value = '11-22-1234';
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.value).toEqual('11/22/1234');
  });
});
