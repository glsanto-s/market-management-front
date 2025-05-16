
const validateVendedor = (form) => {
  const errors = {};

  if (!form.nome || form.nome.length < 2) {
    errors.nome = "Nome deve ter pelo menos 2 caracteres";
  }

  if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Email inválido";
  }

  if (!/^\d{11}$/.test(form.celular)) {
    errors.celular = "Celular deve conter 11 dígitos";
  }

  if (!/^\d{14}$/.test(form.cnpj)) {
    errors.cnpj = "CNPJ deve conter 14 dígitos";
  }

  if (!form.senha || form.senha.length < 6) {
    errors.senha = "Senha deve conter no mínimo 6 caracteres";
  }

  return errors;
};

export default validateVendedor;
