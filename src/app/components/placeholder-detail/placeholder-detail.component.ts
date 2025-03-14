import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPlaceHolderInterface } from 'src/app/JsonPlaceholder';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-placeholder-detail',
  templateUrl: './placeholder-detail.component.html',
  styleUrls: ['./placeholder-detail.component.scss'],
})
export class PlaceholderDetailComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private jsonService: JsonPlaceholderService
  ) {
    this.getDetailPost();
  }
  ngOnInit(): void {}

  post?: JsonPlaceHolderInterface;

  getDetailPost() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.jsonService.getDetailPost(id).subscribe((post) => (this.post = post));
  }
}
