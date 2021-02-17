import {
	Component,
	ComponentFactoryResolver,
	Input,
	OnInit,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { SectionComponent } from '../../../../../interfaces/partial-views/section-component';
import { PostContentDirective } from '../../../directives/post-content.directive';
import { PartialCodeComponent } from '../partial-code/partial-code.component';
import { PartialMediaComponent } from '../partial-media/partial-media.component';
import { PartialTextComponent } from '../partial-text/partial-text.component';
import { PartialTwoColMediaComponent } from '../partial-two-col-media/partial-two-col-media.component';
import { PartialTwoColTextComponent } from '../partial-two-col-text/partial-two-col-text.component';



@Component({
	selector: 'app-blog-post-body',
	templateUrl: './blog-post-body.component.html',
	styleUrls: ['./blog-post-body.component.scss'],
})
export class BlogPostBodyComponent implements OnInit {
	@Input() sections: SectionComponent[];
	@ViewChild(PostContentDirective, { static: true }) sectionsHost: PostContentDirective;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

	ngOnInit(): void {
		// this.loadContentComponents();

		const appendSection = (section: SectionComponent, component: any) => {
			console.log('section: ', section);
			console.log('component', component);
			const containerRef = this.sectionsHost.viewContainerRef;
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory<SectionComponent>(component);
			const componentRef = containerRef.createComponent<SectionComponent>(componentFactory);
			componentRef.instance.data = section;
		}
		
		this.sections.forEach(section => {
			switch (section.__typename) {
				case 'ComponentSectionsCode':
					appendSection(section, PartialCodeComponent);
					break;
				case 'ComponentSectionsText':
					appendSection(section, PartialTextComponent);
					break;
				case 'ComponentSectionsMedia':
					appendSection(section, PartialMediaComponent);
					break;
				case 'ComponentSectionsTwoColMedia':
					appendSection(section, PartialTwoColMediaComponent);
					break;
				case 'ComponentSectionsTwoColText':
					appendSection(section, PartialTwoColTextComponent);
					break;
				default:
					console.error('No matching template');
			}
				
		});
	}

	loadContentComponents() {

		
	}
}
