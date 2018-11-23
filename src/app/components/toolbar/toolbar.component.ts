import { Component, OnInit } from '@angular/core';
import { AppSettings } from '@shared/settings';
import { AppSettingsService } from '@shared/settings.service';

@Component({
	selector: 'de-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
	providers: [AppSettingsService]
})
export class ToolbarComponent implements OnInit {
		
	private settings: AppSettings;

	constructor(
		private appSettingsService: AppSettingsService
	) {
		
	}

	ngOnInit() {
		
		this.appSettingsService.getAll().subscribe(settings => {
			this.settings = settings;
		});
	}

}
