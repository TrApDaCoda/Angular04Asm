import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-select-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponent implements OnInit {
  districts: any[] = [];
  @Output() districtSelected = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.districts = data.Bangkok.districts;
    });
  }

  onSelect(district: any): void {
    this.districtSelected.emit(district);
  }
}
