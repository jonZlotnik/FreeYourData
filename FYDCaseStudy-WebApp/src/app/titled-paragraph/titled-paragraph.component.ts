import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titled-paragraph',
  templateUrl: './titled-paragraph.component.html',
  styleUrls: ['./titled-paragraph.component.scss']
})
export class TitledParagraphComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
