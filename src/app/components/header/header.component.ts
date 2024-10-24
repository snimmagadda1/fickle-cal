import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, DatePipe],
  template: `
    <div class="container">
      <div class="day">
        <h1>{{ month | date : 'MMMM' }} 2024</h1>
        <svg
          fill="#000000"
          height="50px"
          width="50px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 107.145 107.145"
          xml:space="preserve"
        >
          <g>
            <path
              d="M90.351,54.618c-3.98-0.781-9.887,0.346-12.631,3.777c-0.107-0.968-0.175-1.914-0.193-2.829
		c0.086-0.054,0.173-0.101,0.256-0.167c0.298-0.236,0.298-0.833,0-1.068c-0.071-0.057-0.145-0.077-0.216-0.125
		c0.058-0.801,0.167-1.569,0.411-2.244c0.192-0.535-0.406-1.107-0.931-0.931c-0.129,0.044-0.238,0.137-0.357,0.211
		c-0.059-0.17-0.143-0.343-0.274-0.51c-1.45-1.852-3.827-1.319-5.997-1.239c-5.541,0.204-10.556-0.691-16.141-1.296
		c-5.817-0.63-11.858-0.046-17.675,0.534c-7.857-0.35-15.761-0.737-23.509,0.662c-0.429-0.798-1.655-0.989-2.102-0.051
		c-0.062,0.027-0.125,0.047-0.186,0.089c-3.939,2.742-2.55,9.41-2.477,13.518c0.048,2.619,0.495,7.78,2.913,9.901
		c1.771,7.922,5.105,15.615,10.11,20.616c-0.316,0.165-0.656,0.307-0.987,0.457c-3.916-0.691-8.417,0.246-9.648,4.424
		c-0.686,2.328,0.544,4.242,2.402,5.331c4.642,3.281,19.603,3.144,21.939,3.223c7.419,0.257,14.849-0.11,22.267,0.159
		c5.327,0.191,11.503,0.376,15.528-3.3c0.475-0.099,0.934-0.247,1.35-0.539c1.067-0.749,1.737-1.753,1.993-2.869
		c0.692-0.824,0.852-1.755,0.203-2.834c-0.059-0.412-0.142-0.828-0.284-1.236c-0.85-2.452-3.412-3.278-5.563-4.218
		c-0.429-0.187-1.529-0.706-2.746-1.109c1.484-1.481,2.812-3.135,4.045-4.879c4.503,2.517,11.19,0.432,15.319-1.79
		c5.854-3.151,11.604-10.308,11.922-17.164C99.374,61.04,96.72,55.867,90.351,54.618z M78.326,66.413
		c0.031-0.278,0.033-0.581,0.039-0.879c0.104-0.021,0.208-0.042,0.309-0.064c0.373-0.076,0.517-0.437,0.473-0.771
		c1.171-0.676,3.574-0.645,4.501-0.621c3.066,0.082,5.02,1.62,4.045,4.899c-1.362,4.576-6.82,5.907-11.108,7.091
		C77.46,72.917,77.973,69.653,78.326,66.413z M70.187,96.831c0.389,0.011,0.776,0.002,1.16-0.003
		c0.38,0.324,0.704,0.747,0.924,1.187c-2.544-0.395-5.085-0.482-7.671,0.084c-0.835,0.185-0.835,1.502,0,1.684
		c1.246,0.272,2.479,0.361,3.71,0.372c0.833,0.118,1.675,0.208,2.526,0.24c-2.538,0.247-5.11,1.092-7.712,1.586
		c-1.531,0.157-2.934,0.257-4.032,0.324c-6.015-0.075-12.029-0.236-18.051-0.195c-1.695,0.013-8.225,0.489-14.51,0.542
		c-1.818-0.094-3.641-0.206-5.465-0.35c-1.269-0.21-2.534-0.448-3.774-0.745c-0.618-0.255-1.278-0.517-1.835-0.8
		c-0.704-0.738,0.049-1.727,1.417-2.738c1.689-0.401,3.381-0.792,5.123-0.86c2.232-0.088,4.052,1.223,6.164,0.835
		c2.333,0.906,4.896,1.305,7.686,1.095c1.949,0.468,3.934,0.987,5.905,1.309c0.191,0.176,0.428,0.311,0.731,0.328
		c7.488,0.453,14.446-1.652,20.258-5.591c0.935,0.034,1.882,0.08,2.825,0.148c-0.28,0.052-0.557,0.097-0.842,0.163
		c-0.391,0.088-0.391,0.695,0,0.785C66.578,96.653,68.288,96.775,70.187,96.831z M68.464,63.892
		c1.398,0.388,2.724,0.227,4.159,0.125c0.45-0.033,0.935-0.037,1.424-0.046c-0.017,0.684-0.029,1.344-0.04,1.938
		c-1.294-0.011-3.375,0.354-5.194,0.644c-0.955,0.036-1.906,0.115-2.823,0.332c-0.447,0.002-0.731-0.058-0.752-0.225
		c-0.043-0.35-0.571-0.623-0.758-0.206c-0.188,0.415-0.195,0.753-0.078,1.035c-0.253,0.26-0.226,0.784,0.12,0.941
		c1.738,0.783,3.701,0.835,5.585,0.858c1.164,0.014,2.473,0.174,3.672,0.006c-0.223,1.225-0.515,2.431-0.856,3.621
		c-0.009,0-0.013-0.007-0.022-0.007c-0.796,0.023-1.537,0.222-2.277,0.453c-1.894-0.461-3.831-0.678-5.793-0.686
		c-1.053-0.004-1.047,1.601,0,1.629c0.139,0.004,0.276,0.016,0.415,0.026l-0.044,0.333c-0.022,0.154,0.036,0.259,0.18,0.319
		c2.042,0.861,5.013,0.525,7.064-0.544c-0.46,1.368-1.033,2.689-1.653,3.983c-0.169,0.018-0.333,0.029-0.52,0.082
		c-0.649,0.18-1.357,0.065-2.032,0.082c-1.44,0.039-2.828,0.002-4.208,0.467c-0.636,0.217-0.636,1.075,0,1.292
		c0.262,0.089,0.524,0.144,0.786,0.199c-0.625,0.126-1.25,0.252-1.866,0.34c-0.054,0.01-0.054,0.104,0,0.113
		c1.875,0.267,4.145,0.876,6.169,0.591c-0.933,1.528-2.009,2.959-3.173,4.319c-0.286,0.015-0.581,0.062-0.875,0.125
		c-1.237-0.391-2.635-0.252-3.919-0.142c-1.797,0.154-3.388,0.371-5.124,0.864c-0.387,0.111-0.387,0.675,0,0.786
		c0.473,0.134,0.924,0.207,1.381,0.304c1.318,1.35,3.601,1.489,5.72,0.997c-0.837,0.759-1.712,1.48-2.638,2.152
		c-0.989,0.719-2.049,1.283-3.137,1.785c-1.241-0.283-2.403-0.702-3.682-0.873c-1.378-0.189-2.599-0.202-3.975-0.011
		c-0.85,0.116-0.822,1.539,0,1.682c0.28,0.049,0.555,0.097,0.833,0.146c0.435,0.599,1.068,0.841,1.771,0.929
		c-1.169,0.352-2.35,0.687-3.519,1.041c-1.277,0.092-2.557,0.208-3.819,0.236c-2.141,0.045-4.821,0.498-7.301,0.419
		c-17.585-6.021-26.819-25.292-24.718-43.598c9.852,1.388,20.865,0.246,30.724,0.465c6.342,0.142,12.304-0.694,18.678,0.005
		c3.801,0.417,7.34,0.231,10.983-0.801c0.412,0.065,0.777,0.167,1.024,0.375c0.328,0.272,0.666,0.375,0.986,0.382
		c-0.057,0.147-0.098,0.327-0.149,0.487c-0.262,0.005-0.531,0.016-0.811,0.021c-1.648,0.036-3.157,0.177-4.78,0.473
		c-0.416,0.076-0.585,0.541-0.515,0.908c0.038,0.196,0.08,0.392,0.122,0.586c0.12,0.565,0.98,0.573,1.149,0.044
		c1.146,0.186,2.263,0.322,3.45,0.348c0.274,0.005,0.545,0.019,0.815,0.03c-0.169,1.044-0.291,2.174-0.376,3.319
		c-0.037-0.013-0.062-0.047-0.104-0.05c-1.763-0.183-3.403,0.299-5.151,0.299H63.59c-1.051,0-1.051,1.629,0,1.629h5.404
		c1.833,0,3.421-0.581,5.192-0.938c-0.036,0.624-0.062,1.24-0.085,1.85c-0.393,0.056-0.784,0.121-1.158,0.178
		c-1.512,0.23-3.021,0.409-4.478,0.864C68.139,63.322,68.124,63.798,68.464,63.892z M92.679,72.557
		c-2.313,4.09-6.638,7.189-10.892,8.96c-2.395,0.997-5.051,0.809-7.641,0.927c0.535-1.039,0.989-2.111,1.4-3.2
		c7.666,1.491,17.294-4.962,15.845-13.45c-0.622-3.646-4.634-4.753-7.742-4.687c-1.509,0.033-3.956,0.51-5.411,1.655
		c-0.075-0.729-0.162-1.471-0.26-2.228c2.632-3.846,10.453-3.53,13.85-1.577C96.977,61.92,94.978,68.498,92.679,72.557z"
            />
            <path
              d="M49.698,4.311c-0.153-0.516-0.34-1.025-0.555-1.531c-0.172-0.484-0.345-0.967-0.511-1.458
		c-0.076-0.225-0.229-0.324-0.394-0.367c-0.044-0.076-0.082-0.153-0.128-0.228c-1.108-1.864-3.861,0.271-2.332,1.799
		c5.949,5.947-3.875,11.248-7.04,15.07c-1.857,2.244-3.654,4.721-3.838,7.768c-0.346,5.698,1.995,10.901,6.591,13.615
		c0.929,0.314,1.877,0.574,2.833,0.749c0.773,0.141,1.468,0.273,2.141,0.454c0.431-0.506,0.414-1.386-0.262-1.89
		c-0.647-0.482-1.238-0.972-1.788-1.466c-1.079-4.014-2.117-7.357-0.034-12.033c1.283-2.886,4.085-4.148,5.589-6.764
		C52.761,13.179,51.366,8.898,49.698,4.311z M46.841,17.784c-1.786,1.89-3.596,3.289-5.061,5.488
		c-1.346,2.019-1.928,4.076-2.028,6.14c-1.131-5.208,1.715-10.581,7.271-15.164c1.184-0.977,1.991-2.091,2.5-3.279
		C49.62,13.238,49.022,15.48,46.841,17.784z"
            />
            <path
              d="M60.256,10.797c0.002-0.211,0-0.42,0.008-0.629c0.02-0.582-0.395-0.888-0.855-0.955c-0.918-0.669-2.541,0.003-2.046,1.304
		c0.362,0.951,0.727,1.895,1.082,2.841c0.027,0.693,0.053,1.386,0.069,2.084c0.115,5.042-2.397,5.769-5.411,8.31
		c-2.415,2.035-3.841,3.961-4.714,7.017c-0.56,1.964-0.557,4.52,0.105,6.774c-0.255,1.166-0.211,2.35,0.162,3.529
		c0.116,0.065,0.229,0.109,0.348,0.184c0.498,0.314,0.64,1.008,0.493,1.597c0.302,0.481,0.653,0.962,1.082,1.434
		c0.286,0.315,0.757,0.274,1.084,0.049c-0.316-0.689-0.465-1.442-0.344-2.19c0.34-2.086,1.205-4.385,2.878-5.769
		c2.455-3.271,6.28-5.705,7.892-10.174C64.1,20.614,62.223,15.984,60.256,10.797z M51.51,32.476c0.406-3.743,3.008-6.187,6.045-8.79
		c1.468-1.257,2.21-2.714,2.574-4.28c0.067,0.438,0.166,0.866,0.204,1.313C60.813,26.482,54.815,29.211,51.51,32.476z"
            />
            <path
              d="M30.052,84.567c-3.87-6.35-5.267-12.391-5.596-19.775c-0.155-3.406-0.151-6.065-3.757-6.393
		c-0.084-0.235-0.308-0.433-0.564-0.411c-1.22,0.102-1.059,0.071-2.201,0.644c-0.771,0.39-0.046,1.638,0.676,1.157
		c-3.325,2.223-1.264,11.452-0.251,14.557c1.242,3.801,4.305,10.176,8.725,11.146c0.171,0.426,0.442,0.605,1.025,1.018
		C29.3,87.353,30.764,85.731,30.052,84.567z M20.657,60.206c2.564,0.933,1.282,6.458,1.206,8.182
		c-0.113,2.527,0.156,4.376,0.74,6.828c0.095,0.402,0.204,0.816,0.317,1.237c-0.824-1.483-1.544-3.03-2.112-4.67
		C19.464,67.894,20.366,64.041,20.657,60.206z"
            />
            <path
              d="M34.691,88.271c-1.308-0.549-2.71-0.32-4.07-0.136c-0.252,0.034-0.252,0.471,0,0.505c1.306,0.177,3.445,0.3,4.188,1.564
		c0.076,0.127,0.035,0.573-0.06,0.775c-0.023,0-0.073,0.017-0.16,0.06c-0.184,0.051-0.431,0.013-0.615-0.024
		c-0.631-0.12-1.227-0.907-1.749-1.268c-0.375-0.258-0.873,0.087-0.877,0.502c-0.012,1.45,0.89,2.51,2.29,2.838
		c1.417,0.332,2.75-0.208,2.894-1.747C36.658,89.993,35.927,88.792,34.691,88.271z"
            />
          </g>
        </svg>
      </div>
      <nav>
        <ul>
          <li [class.isTouched]="isTouched" (click)="sync()">
            <i class="bi bi-cloud-download"></i>
          </li>
          <li>
            <i class="bi bi-arrow-left" (click)="onArrowClick('left')"></i>
          </li>
          <li>
            <i class="bi bi-arrow-right" (click)="onArrowClick('right')"></i>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() month: Date | undefined;
  @Output() arrowClick = new EventEmitter<string>();

  isTouched = true;
  hovered = false;

	sync(){
		alert('Not yet implemented!')
	}

  onMouseOver() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }

  onArrowClick(direction: string) {
    this.arrowClick.emit(direction);
  }
}
