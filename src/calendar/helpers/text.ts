
export const getShortName = (name: string, maxlength: number): string => {
  if(name.length > maxlength){
    return name.substring(0, maxlength-1) + '\'';
  }
  return name
}