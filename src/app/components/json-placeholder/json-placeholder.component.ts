import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPlaceHolderInterface } from 'src/app/JsonPlaceholder';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.component.html',
  styleUrls: ['./json-placeholder.component.scss'],
})
export class JsonPlaceholderComponent implements OnInit {
  constructor(private jsonService: JsonPlaceholderService) {
    this.getPosts();
  }
  ngOnInit(): void {}

  posts: any[] = [];

  getPosts() {
    return this.jsonService
      .getPosts()
      .subscribe((posts) => (this.posts = posts));
  }

  addPost() {
    const novoPost = { title: 'Novo Post', body: 'Conteudo do post' };

    this.jsonService.criarPost(novoPost).subscribe((res) => {
      this.posts.push(res);
    });
  }
}
