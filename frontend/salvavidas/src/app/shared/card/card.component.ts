import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  title = input<string>('');
  icon = input<string>('');
  accentColor = input<string>('primary');
  value = input<string | number>('');
  subtitle = input<string>('');
  badge = input<string>('');
}
