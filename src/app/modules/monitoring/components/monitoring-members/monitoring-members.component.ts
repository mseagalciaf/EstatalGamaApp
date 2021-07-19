import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MonitoringMemberInterface } from '../../interfaces/monitoring-member-interface';

@Component({
  selector: 'app-monitoring-members',
  templateUrl: './monitoring-members.component.html',
  styleUrls: ['./monitoring-members.component.scss']
})
export class MonitoringMembersComponent implements OnInit {

  dataSource : MatTableDataSource<any>;
  displayedColumns : string[] = ['dni','name','lastName','position','nickname','phone','options'];
  userTest = [
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    },
    {
      dni:'1088355971',
      name:'Michael Siegal',
      lastName:'Moncada Castro',
      position:'Soporte en Línea',
      nickname:'Jaira',
      phone:'3216826730'
    }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.userTest;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
