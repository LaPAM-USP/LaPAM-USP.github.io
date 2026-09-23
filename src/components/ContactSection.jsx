import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  ExternalLink 
} from 'lucide-react';
import { labData } from '../data/labData';

export default function ContactSection({ lang }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Mestrado / Doutorado',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[Contato LaPAM-USP] ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Olá, Prof.ª Dra. Ana Marcia,\n\n` +
      `Meu nome é: ${formData.name}\n` +
      `E-mail para resposta: ${formData.email}\n` +
      `Área de interesse: ${formData.interest}\n\n` +
      `Mensagem:\n${formData.message}\n\n` +
      `---\nEnviado a partir da página oficial do LaPAM (lapam-usp.github.io)`
    );

    // Trigger mailto client directly to anamarcia@usp.br
    window.location.href = `mailto:${labData.links.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-teal-600" />
            <span>{lang === 'pt' ? 'Contato & Oportunidades' : 'Get in Touch'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Fale Conosco' : 'Contact Us'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'pt'
              ? 'Interessado em pós-graduação, iniciação científica ou colaborações de pesquisa com o LaPAM?'
              : 'Interested in graduate studies, undergraduate research, or scientific collaborations?'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Location & Info Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-teal-600" />
                <span>{lang === 'pt' ? labData.institutionPt : labData.institutionEn}</span>
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {lang === 'pt' ? labData.departmentPt : labData.departmentEn}
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'pt' ? labData.links.addressPt : labData.links.addressEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                <a href={`mailto:${labData.links.email}`} className="text-teal-700 font-semibold hover:underline">
                  {labData.links.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  {lang === 'pt' ? 'Segunda a Sexta: 08h00 - 18h00' : 'Monday to Friday: 08:00 - 18:00 (BRT)'}
                </span>
              </div>
            </div>

            {/* Map Link Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-800 block">ICB II • USP</span>
                <span className="text-[11px] text-slate-500">Cidade Universitária - São Paulo, SP</span>
              </div>
              <a
                href="https://maps.google.com/?q=ICB+II+USP+Av+Prof+Lineu+Prestes+1374"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form -> Sends Email to Ana Marcia */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {lang === 'pt' ? 'Envie uma Mensagem para a Coordenação' : 'Send an Email to the Lab'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {lang === 'pt'
                ? 'Preencha o formulário para enviar um e-mail diretamente para a coordenação.'
                : 'Fill out the form below to send an email directly to the lab head.'}
            </p>

            {formSubmitted ? (
              <div className="p-5 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-teal-600 mx-auto" />
                <h4 className="text-sm font-bold text-teal-900">
                  {lang === 'pt' ? 'Cliente de e-mail aberto!' : 'Email client opened!'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'pt'
                    ? 'Se o seu aplicativo de e-mail não abriu automaticamente, você também pode escrever para anamarcia@usp.br.'
                    : 'If your mail client did not open automatically, you can also write to anamarcia@usp.br.'}
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-teal-700 underline cursor-pointer"
                >
                  {lang === 'pt' ? 'Enviar outra mensagem' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    {lang === 'pt' ? 'Nome Completo' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    {lang === 'pt' ? 'Seu E-mail' : 'Your Email'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                    placeholder="seu.email@usp.br"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    {lang === 'pt' ? 'Área de Interesse' : 'Interest Area'}
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500"
                  >
                    <option value="Mestrado">Mestrado (PPG Microbiologia / Interunidades)</option>
                    <option value="Doutorado">Doutorado (PPG Microbiologia / Bioinformática)</option>
                    <option value="Pós-Doutorado">Pós-Doutorado (FAPESP / CNPq)</option>
                    <option value="Iniciação Científica">Iniciação Científica (Graduação)</option>
                    <option value="Colaboração Científica / BrSeqTB">Colaboração Científica / BrSeqTB</option>
                    <option value="MtbRx">MtbRx (Genomic Explorer)</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    {lang === 'pt' ? 'Mensagem' : 'Message'} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500 resize-none"
                    placeholder={lang === 'pt' ? 'Escreva sua mensagem ou proposta...' : 'Write your message or inquiry...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'pt' ? 'Enviar e-mail' : 'Send email'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
