import { Routes } from "@angular/router";
import { IndexComponent } from "../Pages/Home/index/index.component";
import { Homepage2Component } from "../Pages/Home/homepage-2/homepage-2.component";
import { Homepage3Component } from "../Pages/Home/homepage-3/homepage-3.component";
import { Homepage4Component } from "../Pages/Home/homepage-4/homepage-4.component";
import { Homepage5Component } from "../Pages/Home/homepage-5/homepage-5.component";
import { Homepage6Component } from "../Pages/Home/homepage-6/homepage-6.component";
import { Homepage7Component } from "../Pages/Home/homepage-7/homepage-7.component";
import { Homepage8Component } from "../Pages/Home/homepage-8/homepage-8.component";
import { Homepage9Component } from "../Pages/Home/homepage-9/homepage-9.component";
import { Homepage10Component } from "../Pages/Home/homepage-10/homepage-10.component";
import { GameServer1Component } from "../Pages/GameServer/games/games-list.component";
import { GameServer2Component } from "../Pages/GameServer/game-server-2/game-server-2.component";
import { PricingTableFourComponent } from "../Pages/Pricing/pricing-table-four/pricing-table-four.component";
import { PricingTableThreeComponent } from "../Pages/Pricing/pricing-table-three/pricing-table-three.component";
import { PricingTableTwoComponent } from "../Pages/Pricing/pricing-table-two/pricing-table-two.component";
import { PricingTableOneComponent } from "../Pages/Pricing/pricing-table-one/pricing-table-one.component";
import { LocationsComponent } from "../Pages/locations/locations.component";
import { KnowledgebaseComponent } from "../Pages/support/knowledgebase/knowledgebase.component";
import { FaqComponent } from "../Pages/support/faq/faq.component";
import { ContactComponent } from "../Pages/support/contact/contact.component";
import { AboutComponent } from "../Pages/company/about/about.component";
import { AffliateComponent } from "../Pages/company/affliate/affliate.component";
import { NewsComponent } from "../Pages/company/news/news.component";
import { LoginComponent } from "../Pages/Auth/login/login.component";
import { RegisterComponent } from "../Pages/Auth/register/register.component";
export const MP_ROUTES: Routes = [

    { path: '', component: IndexComponent },
    { path: 'homepage-2', component: Homepage2Component },
    { path: 'homepage-3', component: Homepage3Component },
    { path: 'homepage-4', component: Homepage4Component },
    { path: 'homepage-5', component: Homepage5Component },
    { path: 'homepage-6', component: Homepage6Component },
    { path: 'homepage-7', component: Homepage7Component },
    { path: 'homepage-8', component: Homepage8Component },
    { path: 'homepage-9', component: Homepage9Component },
    { path: 'homepage-10', component: Homepage10Component },

    { path: 'games', component: GameServer1Component },
    { path: 'game-server-2', component: GameServer2Component },

    { path: 'pricing-table-one', component: PricingTableOneComponent },
    { path: 'pricing-table-two', component: PricingTableTwoComponent },
    { path: 'pricing-table-three', component: PricingTableThreeComponent },
    { path: 'pricing-table-four', component: PricingTableFourComponent },

    { path: 'locations', component: LocationsComponent },
    { path: 'knowledgebase', component: KnowledgebaseComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'affliate', component: AffliateComponent },
    { path: 'news', component: NewsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
]