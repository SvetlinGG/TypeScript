import { BaseHero, GuildStash } from "./hero-types";
import { Weapon } from "./models";

export class GameManager {
    private heroes: BaseHero[] = [];
    private stash: GuildStash<Weapon> = new GuildStash<Weapon>();

    public addHero(hero: BaseHero): string{
        this.heroes.push(hero);
        return `Hero "${hero.name}" (ID: ${hero.id}) joined guild.`
    }

    public addWeaponToStash(weapon: Weapon): string{
        this.stash.add(weapon);
        return `Weapon "${weapon.name}" (ID: ${weapon.id}) added to the guild stash.`
    }
}