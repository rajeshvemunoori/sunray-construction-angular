export class HandleActions {
  subcribed: boolean = false
  ctor: any

  handleDialogActions(ctor) {
    this.ctor = ctor
    if(!this.subscribed) {
      this.dialogActions$.subscribe((event) => {
        this.handleAction(event.action)
        this.subscribed = true
      })
    }
  }

  private handleAction(action) {
    switch(action.name) { 
      case 'launch': {
        break
      }
      case 'submit': {
        if(this.isValid()) {
          this.onSubmit(
            this.resourceOpts()
          )
        }
        break
      }
      default: {
        console.log("Not sure what to do with the " + event.action + " action")
        break;
      }
    }
  }

  private isValid() {
    return this.ctor.formGroup.valid
  }

  private onSubmit(resourceOpts) {
    if(resourceOpts.id) {
      this.update$(resourceOpts)
    }
    else {
      this.create$(resourceOpts)
    }
  }

  private resourceOpts() {
    return _.merge(
      this.ri(this.ctor.entity),
      {data: this.ctor.payload()}
    )
  }

  private ri(entity) {
    return _.merge(
      {feature: 'app'},
      _.omitBy(
        _.pick(entity, ['id', 'type']),
        _.isNull
      )
    )
  }
}
