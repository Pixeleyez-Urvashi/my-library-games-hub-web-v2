import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { jarallax } from 'jarallax';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { PlatformConsoleModel } from '../../../models/platform-console-model';
import { GameService } from '../../../Service/api/game.service';
import { GameModel } from '../../../models/game-model';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Pagination } from '../../../models/pagination.model';

@Component({
  selector: 'app-game-server-1',
  imports: [QuestionsComponent, CommonModule, FormsModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GameServer1Component {

  checkedPlatformConsoleSelectedFilter: PlatformConsoleModel = new PlatformConsoleModel();
  games: GameModel[] = new Array();
  gameTitleToSearch: string | undefined;
  pagination: Pagination = new Pagination();


  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });
    }

    this.getListGames(1, 12, 0, "");
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private gameService: GameService,
    private titleService: Title) { }
  selectedFilter: string = '*'; // Default filter shows all items

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  isItemVisible(item: any): boolean {
    if (this.selectedFilter === '*') {
      return true;
    }
    return item.idPlatformConsole.split(' ').includes(this.selectedFilter.replace('.', ''));
  }

  getListGames(page: number, size: number, idPlatformConsole: number, gameTitleSearch: string) {
    this.gameService.getGames(page, size, idPlatformConsole, gameTitleSearch).subscribe(
      response => {
        this.games = response.games || [];
        this.pagination.currentPage = response.currentPageNumber;
        this.pagination.pageSize = response.pageSize;
        this.pagination.pages = response.pages;
        this.pagination.totalPages = response.totalPages;
        this.titleService.setTitle("MLGH - " + 'Catálogo de Jogos');
      }
    )
  }

  searchGame() {
    let idPlatformConsole = 0;
    if (this.checkedPlatformConsoleSelectedFilter.idPlatformConsole === undefined || this.checkedPlatformConsoleSelectedFilter.idPlatformConsole === null) {
      idPlatformConsole = 0;
    } else {
      idPlatformConsole = this.checkedPlatformConsoleSelectedFilter.idPlatformConsole
    }
    this.getListGames(1, 12, idPlatformConsole, this.gameTitleToSearch!);
  }

  setPage(page: number) {
    let idPlatformConsole = 0;
    if (this.checkedPlatformConsoleSelectedFilter.idPlatformConsole === undefined || this.checkedPlatformConsoleSelectedFilter.idPlatformConsole === null) {
      idPlatformConsole = 0;
    } else {
      idPlatformConsole = this.checkedPlatformConsoleSelectedFilter.idPlatformConsole
    }
    this.getListGames(page, 12, idPlatformConsole, this.gameTitleToSearch!);
  }
}
