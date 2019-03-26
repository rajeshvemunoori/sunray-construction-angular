export class SunrayAttributeEntity {
  dataType: string
  name: string
  value: any
  defaultValue: any
  displayName: string
  attributeConfig: any

  constructor(data: any) {
    this.value = data.value;

    this.attributeConfig = data.attributeConfig

    // this should be a different object, maybe 
    // an instance of "AttributeConfig"
    this.dataType = data.dataType
    this.name = data.name
    this.defaultValue = data.defaultValue
    this.displayName = data.displayName
  }
}
