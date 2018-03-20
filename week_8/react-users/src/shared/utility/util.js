
export const hidden =()=> {
  const spl = this.email.indexOf('@');
  const string = this.email.substring(0,spl) + '...';
  return string;
  };
 

export const getDate = () =>{
  const date = new Date(this.dob);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${year}-${month}-${day}`;

}
  
  