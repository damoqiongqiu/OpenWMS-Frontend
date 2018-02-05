import { Component, HostListener,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel,ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { EventBusService } from './common/services/event-bus.service';
import 'rxjs/add/operator/merge';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public loading = false;
	private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService, 
		private eventBusService: EventBusService
	) {
		
	}

	ngOnInit() {
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang('zh');

		const browserLang = this.translate.getBrowserLang();
		console.log("检测到的浏览器语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');

		this.eventBusService.showGlobalLoading.subscribe((value:boolean) => {
            this.loading=value;
		});

		this.router.events.subscribe((event) => {
			if(event instanceof NavigationStart){
				this.eventBusService.showGlobalLoading.next(true);
			}
			if(event instanceof NavigationEnd || 
				event instanceof NavigationError || 
				event instanceof NavigationCancel){
				this.eventBusService.showGlobalLoading.next(false);
			}
		});
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}
}