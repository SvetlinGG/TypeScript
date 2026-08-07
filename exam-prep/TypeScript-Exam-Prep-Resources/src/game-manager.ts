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

    public equipWeapon(heroId: number, weaponId: number): string{
        const hero = this.heroes.find(h => h.id === heroId);

        if(!hero){
            return `ERROR: Hero with ID ${heroId} not found.`;
        }
        const weapon = this.stash.take(weaponId);

        if(!weapon){
            return `ERROR: Weapon with ID ${weaponId} not found in the stash.`;
        }

        hero.weapons.push(weapon);
        return `Weapon ${weapon.name}" equipped to hero "${hero.name}".`;
    }
}