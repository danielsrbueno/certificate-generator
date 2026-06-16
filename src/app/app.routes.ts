import { Routes } from '@angular/router';
import { Certificates } from './pages/certificates/certificates';
import { CertificateForm } from './pages/certificate-form/certificate-form';
import { Certificate } from './pages/certificate/certificate';

export const routes: Routes = [
  {
    path: "",
    component: Certificates
  },
  {
    path: "certificates/new",
    component: CertificateForm
  },
  {
    path: "certificates/:id",
    component: Certificate
  }
];
