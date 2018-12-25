import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  @Input() showTitle: boolean= true;
  constructor() { }

  ngOnInit() {
  }

}
