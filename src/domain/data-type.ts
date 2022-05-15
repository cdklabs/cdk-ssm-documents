import { isBoolean } from '../interface/variables/boolean-variable';
import { isMapList } from '../interface/variables/map-list-variable';
import { isNumber } from '../interface/variables/number-variable';
import { isStringList } from '../interface/variables/string-list-variable';
import { isStringMap } from '../interface/variables/string-map-variable';
import { isString } from '../interface/variables/string-variable';

/**
 * DataTypes as supported by SSM Documents.
 */
export enum DataTypeEnum {
  STRING,
  INTEGER,
  BOOLEAN,
  STRING_LIST,
  STRING_MAP,
  MAP_LIST,
}

/**
 * JSII does not allow functions or constants declared in an enum class directly.
 * Therefore, interaction with DataTypeEnum happens through this class.
 */
export class DataType {

  public static fromDataType(ssmDataType: string) {
    const dataType = DataType.STRING_TO_DATA_TYPE[ssmDataType];
    if (dataType != undefined) {
      return new DataType(dataType);
    } else {
      throw new Error(`Runtime ${ssmDataType} not supported.`);
    }
  }

  private static readonly STRING_TO_DATA_TYPE: { [name: string]: DataTypeEnum } = {
    String: DataTypeEnum.STRING,
    Integer: DataTypeEnum.INTEGER,
    Boolean: DataTypeEnum.BOOLEAN,
    StringList: DataTypeEnum.STRING_LIST,
    StringMap: DataTypeEnum.STRING_MAP,
    MapList: DataTypeEnum.MAP_LIST,
  };

  readonly dataTypeEnum: DataTypeEnum;

  constructor(dataTypeEnum: DataTypeEnum) {
    this.dataTypeEnum = dataTypeEnum;
  }

  /**
     * @returns the SSM string representation of this DataType
     */
  public toSsmString(): string {
    const dataTypeEntry = Object.entries(DataType.STRING_TO_DATA_TYPE)
      .filter(entry => entry[1] == this.dataTypeEnum)[0];
    if (dataTypeEntry) {
      return dataTypeEntry[0];
    } else {
      throw new Error(`DataType ${this.dataTypeEnum} not supported.`);
    }
  }

  /**
     * @returns true if the input variable matches the associated dataTypeEnum
     */
  public validateType(val: any): boolean {
    if (val === null) { return true; }
    switch (this.dataTypeEnum) {
      case DataTypeEnum.STRING:
        return isString(val);
      case DataTypeEnum.INTEGER:
        return isNumber(val);
      case DataTypeEnum.BOOLEAN:
        return isBoolean(val);
      case DataTypeEnum.STRING_LIST:
        return isStringList(val);
      case DataTypeEnum.MAP_LIST:
        return isMapList(val);
      case DataTypeEnum.STRING_MAP:
        return isStringMap(val);
      default:
        throw new Error('DataTypeEnum not supported: ' + this.dataTypeEnum);
    }
  }

}
