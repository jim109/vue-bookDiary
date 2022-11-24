
//rutas para el modulo de daybook
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layout/DayBookLayout.vue'),
  //Aca van todas las rutas hijas que va a tener este modulo daybook  
    children: [
      {
        path: ' ',
        name: 'no-entry',
        component: () => import(/* webpackChunkName: "daybook-no-entry" */ '../views/NoEntrySelected.vue'),
      },
      {
        path: ':id',
        name: 'entry',
        component: () => import(/* webpackChunkName: "daybook-entry" */ '../views/EntryView.vue'),
      }
    ]
    
}