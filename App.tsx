
import React, { useState, FormEvent, useCallback } from 'react';
import { FormField } from './components/FormField';
import { SelectField } from './components/SelectField';
import { TextAreaField } from './components/TextAreaField';
import { CheckboxField } from './components/CheckboxField';
import { SuccessMessage } from './components/SuccessMessage';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  church: string;
  education: string;
  course: string;
  message: string;
  privacy: boolean;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  cityState: '',
  church: '',
  education: '',
  course: '',
  message: '',
  privacy: false,
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const courseOptions = ['Teologia Bíblica', 'Missiologia Contemporânea', 'Exegese Avançada do AT e NT'];
  const educationOptions = ['Bacharel', 'Licenciatura', 'Tecnólogo'];

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Dados do formulário:', formData);

    // Simula uma chamada de API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
    }, 1500);
  };

  if (isSubmitted) {
    return <SuccessMessage onReset={() => setIsSubmitted(false)} />;
  }

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-navy flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-10 flex flex-col md:flex-row">
        <div className="md:w-2/5 bg-brand-navy text-white p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <h1 className="font-serif font-black text-3xl sm:text-4xl mb-4 text-brand-gold">Pós-Graduação STPC</h1>
            <p className="text-gray-300 leading-relaxed">
              Eleve seu ministério a um novo patamar de conhecimento e prática. Nosso curso oferece uma formação de excelência, unindo rigor acadêmico, profundidade espiritual e relevância ministerial.
            </p>
            <ul className="mt-8 space-y-4 text-gray-200">
                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">✓</span>Corpo docente com mestres e doutores renomados.</li>
                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">✓</span>Certificação reconhecida para sua jornada acadêmica e ministerial.</li>
                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">✓</span>Ambiente de formação integral: teológica, prática e espiritual.</li>
            </ul>
          </div>
          <p className="font-serif text-lg text-center italic mt-10">
            “Prepare-se para um novo tempo de excelência ministerial e profundidade bíblica.”
          </p>
        </div>

        <div className="md:w-3/5 p-8 sm:p-10">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-6 text-brand-navy">
            Formulário de Pré-Inscrição
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormField id="fullName" name="fullName" label="Nome Completo" value={formData.fullName} onChange={handleChange} required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField id="email" name="email" label="E-mail" type="email" value={formData.email} onChange={handleChange} required />
              <FormField id="phone" name="phone" label="Telefone (WhatsApp)" type="tel" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField id="cityState" name="cityState" label="Cidade/Estado" value={formData.cityState} onChange={handleChange} required />
              <FormField id="church" name="church" label="Igreja ou Instituição" value={formData.church} onChange={handleChange} />
            </div>
            <SelectField id="education" name="education" label="Grau de Formação Atual" value={formData.education} onChange={handleChange} options={educationOptions} required />
            <SelectField id="course" name="course" label="Curso de Interesse" value={formData.course} onChange={handleChange} options={courseOptions} required />
            <TextAreaField id="message" name="message" label="Mensagem ou motivação para cursar" value={formData.message} onChange={handleChange} rows={4} />
            <CheckboxField id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} required>
                Declaro que li e concordo com a <a href="#" className="text-brand-navy hover:text-brand-gold font-semibold underline">política de privacidade</a>.
            </CheckboxField>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-gold text-brand-navy font-bold text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Enviando...' : 'Quero me pré-inscrever agora'}
            </button>
          </form>
          <footer className="text-center text-sm text-brand-gray mt-8">
            posstpc@gmail.com
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;