import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { Link } from '../../components/link/link';
import { ActivatedRoute, Router } from "@angular/router";
import { Certificate as CertificateService } from '../../services/certificate';
import { ICertificate } from '../../interfaces/certificate';
import html2canvas from 'html2canvas-pro';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, Link],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class Certificate implements OnInit {
  certificateId: string | null = null
  certificate: ICertificate | undefined

  @ViewChild('certificateContainer') certificateElement!: ElementRef

  constructor (
    private certificateService: CertificateService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.certificateId = params.get("id"))

    if (!this.certificateId) {
      this.router.navigate(["/"])
      return
    }

    this.certificate = this.certificateService.getCertificateById(this.certificateId)
     if (!this.certificate) {
      alert("Certificado não encontrado")
      this.router.navigate(["/"])
    }
  }

  getSuffix (index: number): string {
    const length = this.certificate?.activities.length

    if (!length) return ""
    if (length -1 === index) return "."
    if (length -2 === index) return " e "
    return ", "
  }

  async downloadCetificate () {
    if (!this.certificate) return alert("Falha ao baixar certificado.")

    try {
      const canvas = await html2canvas(this.certificateElement.nativeElement, { scale: 2 })

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = `certificado-${this.certificate.studentName.replaceAll(" ", "-").toLowerCase()}.png`
      link.click()

    } catch (err) {
      console.error(err)
      alert("Falha ao baixar certificado.")
    }
  }
}
