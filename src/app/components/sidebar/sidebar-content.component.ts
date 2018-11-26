import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SidebarDirective } from './sidebar.directive';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarDrawer } from '@components/sidebar/sidebar-toggler.component';

export interface SidebarComponent {
	
}

@Component({
	selector: 'we-sidebar-content',
	templateUrl: './sidebar-content.component.html',
	styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
	
	@Input() drawer: MatDrawer;
	
	@ViewChild(SidebarDirective) weSidebar: SidebarDirective;
	
	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) {
		
	}
	
	public addComp(drawer: SidebarDrawer) {
		
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(drawer.content);
		const viewContainerRef = this.weSidebar.viewContainerRef;
		const componentRef = viewContainerRef.createComponent(componentFactory);
	}
	public removeComp(drawer: SidebarDrawer) {
		
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(drawer.content);
		const viewContainerRef = this.weSidebar.viewContainerRef;
		const componentRef = viewContainerRef.remove();
	}

	ngOnInit() {
		
	}
}