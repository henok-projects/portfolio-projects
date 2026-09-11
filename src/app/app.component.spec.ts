import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();
  });

  it('creates the portfolio shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the professional headline', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Dependable systems');
  });

  it('toggles the mobile navigation and project details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    component.toggleMenu();
    component.toggleProject('healthcare');

    expect(component.menuOpen()).toBe(true);
    expect(component.activeProject()).toBe('healthcare');
  });

  it('provides the email address when clipboard access is unavailable', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    await component.copyEmail();

    expect(component.emailCopyStatus()).toContain('henokaddis72@gmail.com');
  });

  it('opens a pre-addressed Gmail compose tab', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const emailLink = fixture.nativeElement.querySelector('.contact-actions a') as HTMLAnchorElement | null;
    expect(emailLink).not.toBeNull();
    expect(emailLink?.href).toContain('mail.google.com/mail/?view=cm&fs=1&to=henokaddis72%40gmail.com');
    expect(emailLink?.target).toBe('_blank');
  });
});
