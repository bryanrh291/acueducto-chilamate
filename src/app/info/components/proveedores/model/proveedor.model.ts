export interface Proveedor
{
  //representante legal
  nombre_rep_legal:string,
  apellido_rep_legal:string,
  cedula_rep_legal:string,
  codigo_tel_rep_legal:string,
  numero_tel_rep_legal:string,
  //empresa
  nombre:string,
  categoria:string,
  direccion_calle:string,
  direccion_calle_ln2:string,
  ciudad:string,
  estado_provincia:string,
  codigo_tel_emp:string,
  numero_tel_emp:string,
  correo:string,
  //archivos
  arch_cedula_rep:string,
  arch_cedula_juri:string,
  arch_certif_ccss:string,
  arch_reg_min_hacienda:string,
  arch_personeria:string,
  arch_fontaneria:string,
  arch_experiencia:string,
}
