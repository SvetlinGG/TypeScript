import { Archer, BaseHero, GuildStash, Mage, Warrior } from "./hero-types";
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

    public listAllHeroes(): string[] {
    const result: string[] = [
        "--- Guild Roster ---"
    ];

    for (const hero of this.heroes) {
        let specificDetail = "";

        if (hero instanceof Warrior) {
            specificDetail =
                `Strength: ${hero.strength}`;
        } else if (hero instanceof Mage) {
            specificDetail =
                `Mana: ${hero.mana}`;
        } else if (hero instanceof Archer) {
            specificDetail =
                `Agility: ${hero.agility}`;
        }

        const stamina = hero.calculateStamina();

        result.push(
            `[${hero.role}] ${hero.name} ` +
            `(Level: ${hero.level}, ${specificDetail}) ` +
            `- Stamina: ${stamina}`
        );
    }

    result.push("--------------------");

    return result;
}
}