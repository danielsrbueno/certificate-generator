import { Injectable } from '@angular/core';
import { ICertificate } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root',
})
export class Certificate {
  certificates: ICertificate[] = []

  constructor () {}

  addCertificate (certificate: ICertificate) {
    this.certificates.unshift({ ...certificate })
    localStorage.setItem('certificates', JSON.stringify(this.certificates))
  }

  getCertificateById (id: string): ICertificate | undefined {
    return this.certificates.find(certificate => certificate.id === id)
  }
}
