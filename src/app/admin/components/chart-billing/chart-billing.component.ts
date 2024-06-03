import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { OrderProduct } from '../../../model/orderProduct';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../model/order';
@Component({
  selector: 'app-chart-billing',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-billing.component.html',
  styleUrl: './chart-billing.component.scss',
})
export class ChartBillingComponent {
  data: any;
  options: any;
  dates: any[];
  money:any;
  groupedOrders;

  constructor(private orderService: OrderService){}

  ngOnInit() {
      this.orderService.getOrders().subscribe((orders: Order[]) => {
        // Crear un objeto para almacenar las fechas y los ingresos
        let groupedOrders = {};

        orders.forEach((order) => {
          // Convertir la fecha a un formato sin tiempo (sólo la fecha)
          let date = new Date(order.orderDate);
          let key =
            date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate();

          // Si la fecha ya existe en el objeto, sumar los ingresos. Si no, añadir la fecha al objeto.
          if (key in groupedOrders) {
            groupedOrders[key] += order.paymentAmount;
          } else {
            groupedOrders[key] = order.paymentAmount;
          }
        });

        // Ahora, 'groupedOrders' es un objeto donde las claves son las fechas y los valores son los ingresos totales de esa fecha
        this.groupedOrders = groupedOrders;

        // Crear arrays separados para las fechas y los ingresos (para su uso en gráficos, por ejemplo)
        // Ordenar las fechas y los ingresos
        let sortedDatesAndRevenues = Object.entries(groupedOrders).sort(
          (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime()
        );

        // Crear arrays separados para las fechas y los ingresos
        this.dates = sortedDatesAndRevenues.map((entry) => entry[0]);
        this.money = sortedDatesAndRevenues.map((entry) => entry[1]);

        this.initData();
      });
    }

  initData() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.data = {
      labels: this.dates,
      datasets: [
        {
          label: 'Ingresos',
          data: this.money,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        title: {
          display: true,
          text: 'Gráfico de Facturacion',
          color: '#fffff',
        },
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
