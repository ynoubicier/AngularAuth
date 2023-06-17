export class AppareilService
{
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'eteint'
    },
    {
      id: 2,
      name: 'Machine à écrire',
      status: 'allume'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'eteint'
    },
    {
      id: 4,
      name: 'Refrigérateur',
      status: 'eteint'
    },
    {
      id: 5,
      name: 'Four',
      status: 'allume'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }
  switchOnAll() {
    for (let appareil of this.appareils)
      appareil.status = 'allume';
  }
  switchOffAll() {
    for (let appareil of this.appareils)
      appareil.status = 'eteint';
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allume';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'eteint';
  }
}