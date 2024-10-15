const classes = {
    Fighter: {
        perks: [
            { name: 'Adrenaline Spike', image: 'assets/fighter/Adrenaline_Spike.png', description: 'When your health goes below 40%, gain 15% Action Speed for 12s.' },
            { name: 'Barricade', image: 'assets/fighter/Barricade.png', description: 'While in defensive stance, gain 50 Armor Rating and 50 Magical Resistance.' },
            { name: 'Combo Attack', image: 'assets/fighter/Combo_Attack.png', description: 'When you successfully melee attack consecutively within 2s, gain 10% Physical Power Bonus for 2s.' },
            { name: 'Counterattack', image: 'assets/fighter/Counterattack.png', description: 'When you successfully block an attack, gain 10% Move Speed Bonus and 10% Action Speed for 3s.' },
            { name: 'Defense Mastery', image: 'assets/fighter/Defense_Mastery.png', description: 'Gain an additional 10% Item Armor Rating Bonus from equipped armor.' },
            { name: 'Dual Wield', image: 'assets/fighter/Dual_Wield.png', description: 'While you have weapons equipped in both hands, gain 10% Action Speed.' },
            { name: 'Projectile Resistance', image: 'assets/fighter/Projectile_Resistance.png', description: 'Gain 10% Projectile Damage Reduction.' },
            { name: 'Shield Mastery', image: 'assets/fighter/Shield_Mastery.png', description: 'While in defensive stance, gain 10% Move Speed Bonus. When you successfully block an attack, gain 50% Action Speed towards your next block or attack.' },
            { name: 'Slayer', image: 'assets/fighter/Slayer.png', description: 'While holding a weapon in each hand, gain 5 Physical Buff Weapon Damage and lose the ability to equip plate armor.' },
            { name: 'Swift', image: 'assets/fighter/Swift.png', description: 'Gain -30% Armor Speed Penalty Bonus. Not applicable to additional speed modifiers.' },
            { name: 'Sword Mastery', image: 'assets/fighter/Sword_Mastery.png', description: 'When using a Sword-type weapon, gain 2 Physical Buff Weapon Damage and 5% Action Speed. Also gain 10 Move Speed Add when taking a defensive stance with your sword.' },
            { name: 'Weapon Mastery', image: 'assets/fighter/Weapon_Mastery.png', description: 'Gain the ability to use any weapon. While using non-native weapon to your class, lose -10% Physical Power Bonus on the weapon.' }
        ],
        abilities: [
            { name: 'Adrenaline Rush', image: 'assets/fighter/Skill_Adrenaline_Rush.png', description: 'Gain 15% Action Speed for 8s. After the duration ends, lose -8% Action Speed and -4% Move Speed Bonus for 2s.' },
            { name: 'Breakthrough', image: 'assets/fighter/Skill_Breakthrough.png', description: 'Remove and become immune to Debuffs that slow move speed and become knockback immune for 10s.' },
            { name: 'Perfect Block', image: 'assets/fighter/Skill_Perfect_Block.png', description: 'Gain 5 Impact Resistance for 6s.' },
            { name: 'Second Wind', image: 'assets/fighter/Skill_Second_Wind.png', description: 'Recover 40% Percent Max Health Healing over 12s. Additionally, Second Wind removes the negative effects of the Adrenaline Rush.' },
            { name: 'Shield Slam', image: 'assets/fighter/Skill_Shield_Slam.png', description: 'When using a shield, perform a shield bash attack that actively blocks and deals 25 Physical Damage (100% Scaling) and decreases the victims Move Speed Bonus by -20% for 2 seconds after knocking them backwards.' },
            { name: 'Sprint', image: 'assets/fighter/Skill_Sprint.png', description: 'Gain 3 stacks of Momentum, granting 15 Move Speed Add per stack. Lose 1 stack every 2s.' },
            { name: 'Taunt', image: 'assets/fighter/Skill_Taunt.png', description: 'Increases the aggro value to all monsters within a 7.5m area by 50%. Gain 10% Physical Damage Reduction and 10% Magical Damage Reduction for 8s.' },
            { name: 'Victory Strike', image: 'assets/fighter/Skill_Victory_Strike.png', description: 'Your next attack within 10s deals an additional 20% Physical Power Bonus. If the target dies from this attack, heal for 15% Percent Max Health Healing.' }
        ]
    },
	Barbarian: {
        perks: [
			{ name: 'Axe Specialization', image: 'assets/barbarian/Axe_Specialization.png', description: 'While using axes, gain 3 Physical Buff Weapon Damage.' },
            { name: 'Berserker', image: 'assets/barbarian/Berserker.png', description: 'Gain 0 to 33.3% Physical Power Bonus when missing 0% to 100% of your max health.' },
            { name: 'Carnage', image: 'assets/barbarian/Carnage.png', description: 'When a target is killed, gain 75 Armor Rating for 7s.' },
            { name: 'Executioner', image: 'assets/barbarian/Executioner.png', description: 'While using axes, gain 10% Physical Headshot bonus' },
            { name: 'Iron Will', image: 'assets/barbarian/Iron_Will.png', description: 'Gain 60 Magical Resistance and immunity to knockback effects.' },
            { name: 'Morale Boost', image: 'assets/barbarian/Morale_Boost.png', description: 'Receive 12% Percent Max Health Healing after killing a player.' },
            { name: 'Potion Chugger', image: 'assets/barbarian/Potion_Chugger.png', description: 'Gain 1.2x healing and 1.2x shielding potency from all drinks, while reducing the duration to 0.5x the base amount.' },
            { name: 'Savage', image: 'assets/barbarian/Savage.png', description: 'While not wearing any chest armor, gain 10% Physical Power Bonus.' },
            { name: 'Crush', image: 'assets/barbarian/Crush.png', description: 'Gain the ability to destroy unreinforced doors and containers. Also gain 1 Impact Power on your attacks with two-handed weapons to defeat blocks and parries better.' },
            { name: 'Robust', image: 'assets/barbarian/Robust.png', description: 'Gain 15% Max Health Bonus.' },
            { name: 'Treacherous Lungs', image: 'assets/barbarian/Treacherous_Lungs.png', description: 'Increases the duration of all shouting abilities (War Cry, Rage, Savage Roar) to 1.3x of the base amount.' },
            { name: 'Two-Hander', image: 'assets/barbarian/Two_Hander.png', description: 'While using axes, gain 3 Physical Buff Weapon Damage.' }
        ],
        abilities: [
			{ name: 'Achilles Strike', image: 'assets/barbarian/Skill_Achilles_Strike.png', description: 'The next time you strike a target, inflict -30% Move Speed Bonus for 2.5s. While debuffed, each time the target moves they receive 1 Physical Base Damage.' },
            { name: 'Blood Exchange', image: 'assets/barbarian/Skill_Blood_Exchange.png', description: 'For 8s, receive 10% Percent Max Health Healing with each successful attack. In exchange, suffer -20% Max Health Bonus for the duration.' },
            { name: 'Rage', image: 'assets/barbarian/Skill_Rage.png', description: 'For 6s, gain 10 Strength, 10 Vigor, and 10% Move Speed Bonus, but suffer -10% Physical Damage Reduction.' },
            { name: 'Reckless Attack', image: 'assets/barbarian/Skill_Reckless_Attack.png', description: 'Gain 85% Armor Penetration on your next melee attack. While active, suffer -85 Armor Rating.' },
            { name: 'Savage Roar', image: 'assets/barbarian/Skill_Savage_Roar.png', description: 'Frightens all enemies within a 7.5m radius, causing players to suffer -30% Physical Power Bonus for 6s and forcing monsters to flee for 3s.' },
            { name: 'War Cry', image: 'assets/barbarian/Skill_War_Cry.png', description: 'You and allies within 7.5m gain 25% Max Health Bonus for 7s.' },
            { name: 'War Sacrifice', image: 'assets/barbarian/Skill_War_Sacrifice.png', description: 'While active, gain 5 All Attributes for 8s. In exchange, suffer -10% Percent Max Health Healing over 8s.' }
        ]
    },
    Rogue: {
        perks: [
			{ name: 'Ambush', image: 'assets/rogue/Ambush.png', description: 'When coming out of hide, you gain 10% Move Speed Bonus and 25% Physical Power Bonus for 3s. If the melee attack is successful, the effect disappears.' },
            { name: 'Back Attack', image: 'assets/rogue/Back_Attack.png', description: 'When attacking a target from behind gain 30% Physical Power Bonus.' },
            { name: 'Creep', image: 'assets/rogue/Creep.png', description: 'While crouching for at least 0.5s, reduce the volume of footsteps significantly.' },
            { name: 'Dagger Mastery', image: 'assets/rogue/Dagger_Mastery.png', description: 'When swinging a dagger, gain 15% Physical Power Bonus.' },
            { name: 'Double Jump', image: 'assets/rogue/Double_Jump.png', description: 'You gain the ability to jump an additional time in the air, but lose -10 Move Speed Add. After double jumping, receive a 75% Movement Multiplier until landing.' },
            { name: 'Hide Mastery', image: 'assets/rogue/Hide_Mastery.png', description: 'Increases the Hide skill duration to 2.5x and multiplies the cooldown by 0.7x.' },
            { name: 'Jokester', image: 'assets/rogue/Jokester.png', description: 'Grant self and all party members 2 All Attributes within 6m.' },
            { name: 'Pickpocket', image: 'assets/rogue/Pickpocket.png', description: 'Can steal items from players.' },
            { name: 'Poisoned Weapon', image: 'assets/rogue/Poisoned_Weapon.png', description: 'A successful attack applies poison that deals 4 Magical Base Damage over 4s.' },
            { name: 'Stealth', image: 'assets/rogue/Stealth.png', description: 'While hiding, gain the ability to move 10 steps while crouching or slow walking. Also gain 3 Move Speed Add per remaining step.' },
            { name: 'Thrust', image: 'assets/rogue/Thrust.png', description: 'When swinging a dagger, gain an additional 20% Armor Penetration.' },
            { name: 'Traps and Locks', image: 'assets/rogue/Traps_and_Locks.png', description: 'You can unlock locked locks without a lockpick and detect traps within 4.5m to disarm them.' }
        ],
        abilities: [
			{ name: 'Caltrops', image: 'assets/rogue/Skill_Caltrops.png', description: 'Drops Caltrops at your feet that deal 10 Physical Base Damage and slows by -50% Move Speed Bonus to the next character that steps on them for 3s. Caltrop stays on the ground for 60s.' },
            { name: 'Cut Throat', image: 'assets/rogue/Skill_Cut_Throat.png', description: 'When you successfully hit a target, silence them for 2s, disabling the targets skills/spells/performance abilities.' },
            { name: 'Hide', image: 'assets/rogue/Skill_Hide.png', description: 'Become invisible for 8s.' },
            { name: 'Rupture', image: 'assets/rogue/Skill_Rupture.png', description: 'The next successful attack causes the target to bleed for 20 Physical Base Damage over 5s. The Buff is consumed when an attack hits an object or target.' },
            { name: 'Smoke Pot', image: 'assets/rogue/Skill_Smoke_Bomb.png', description: 'A smoke pot is deployed creating a smoke screen. The smoke screen lasts 12s and covers a 6m area. While an enemy target is within the smoke screen it slows them by -10% Move Speed Bonus.' },
            { name: 'Tumbling', image: 'assets/rogue/Skill_Tumbling.png', description: 'When used, backtumbles in the opposite direction the player is facing.' },
            { name: 'Weakpoint Attack', image: 'assets/rogue/Skill_Weakpoint_Attack.png', description: 'When you successfully hit a target, reduce their armor rating by -40% Item Armor Rating Bonus for 3s. Only when melee attacking.' }
        ]
    },
    Ranger: {
        perks: [
			{ name: 'Camping Mastery', image: 'assets/ranger/Camping_Mastery.png', description: 'Gain 50% Regular Interaction Speed while setting up Campfires and increases the duration to 1.3x.' },
            { name: 'Chase', image: 'assets/ranger/Chase.png', description: 'Detect recent enemy footsteps within 5.5m and can hear enemy footstep sounds from farther away.' },
            { name: 'Crippling Shot', image: 'assets/ranger/Crippling_Shot.png', description: 'Hitting the targets leg with a projectile inflicts -40% Move Speed Bonus for 1s.' },
            { name: 'Crossbow Mastery', image: 'assets/ranger/Crossbow_Mastery.png', description: 'While using a crossbow, gain 5% Physical Power Bonus and an additional 50% Action Speed while reloading.' },
            { name: 'Kinesthesia', image: 'assets/ranger/Kinesthesia.png', description: 'When moving with the bowstring drawn, receive a movement multiplier of 110%.' },
            { name: 'Nimble Hands', image: 'assets/ranger/Nimble_Hands.png', description: 'When using a bow, increases the animations base draw speed by 15%.' },
            { name: 'Quick Reload', image: 'assets/ranger/Quick_Reload.png', description: 'When reloading a bow-type weapon, gain 50% Action Speed.' },
            { name: 'Ranged Weapons Mastery', image: 'assets/ranger/Ranged_Weapons_Mastery.png', description: 'When attacking with a ranged weapon, gain 5% Physical Power Bonus.' },
            { name: 'Sharpshooter', image: 'assets/ranger/Sharpshooter.png', description: 'When attacking with a ranged weapon, gain 15% Physical Headshot Hit Location Bonus.' },
            { name: 'Spear Proficiency', image: 'assets/ranger/Spear_Proficiency.png', description: 'Gain the ability to equip spears. While using a spear, gain 7 Physical Power.' },
            { name: 'Trap Mastery', image: 'assets/ranger/Trap_Mastery.png', description: 'When installing traps, gain 100% Regular Interaction Speed.' }
        ],
        abilities: [
			{ name: 'Back Step', image: 'assets/ranger/Skill_Back_Step.png', description: 'Quickly retreats 4m in 0.2s. It can also be used in the air.' },
            { name: 'Field Ration', image: 'assets/ranger/Skill_Field_Ration.png', description: 'Forage food and recover 25 Physical Base Healing.' },
            { name: 'Forceful Shot', image: 'assets/ranger/Skill_Forceful_Shot.png', description: 'When using a bow-type weapon, gain the ability to knock targets 2.5m back for 8s.' },
            { name: 'Multishot', image: 'assets/ranger/Skill_Multishot.png', description: 'When using a bow-type weapon, fire 5 arrows at once in cone shaped dispersion. All 5 arrows deal 100% damage.' },
            { name: 'Penetrating Shot', image: 'assets/ranger/Skill_Penetrating_Shot.png', description: 'Gain 50% Physical Headshot Penetration and 25% Armor Penetration for 8s.' },
            { name: 'Quick Fire', image: 'assets/ranger/Skill_Quick_Fire.png', description: 'Gain an additional 50% Action Speed for 8s while using bow-type weapons.' },
            { name: 'Quickshot', image: 'assets/ranger/Skill_Quickshot.png', description: 'Fire arrows in a quick succession. Each bow-type will fire a different amount of arrows.(2 for Longbow, 3 for Recurve Bow, 4 for Survival Bow)' },
            { name: 'True Shot', image: 'assets/ranger/Skill_True_Shot.png', description: 'The next projectile within 8s is no longer affected by gravity and gains 8% Physical Power Bonus.' }
        ]
    },
    Wizard: {
        perks: [
			{ name: 'Arcane Feedback', image: 'assets/wizard/Arcane_Feedback.png', description: 'When you deal damage with an Arcane spell, gain a stacking bonus granting 2% Spell Casting Speed and 2% Arcane Arcane Power Bonus per stack for 7s.' },
            { name: 'Arcane Mastery', image: 'assets/wizard/Arcane_Mastery.png', description: 'Gain 5% Arcane Power Bonus and reduces the cast time of Arcane spells by 0.5s.' },
            { name: 'Fire Mastery', image: 'assets/wizard/Fire_Mastery.png', description: 'Gain 5% Fire Power Bonus. The duration of applied burns are increased by 2 seconds and deal 2 more base damage and burn the target to suffer -50% Incoming Physical Healing Mod and -50% Incoming Magical Healing Mod for 5s.' },
            { name: 'Ice Mastery', image: 'assets/wizard/Ice_Mastery.png', description: 'Dealing damage with Ice freezes the targets feet and prevents them from moving for 0.5s.' },
            { name: 'Ice Shield', image: 'assets/wizard/Ice_Shield.png', description: 'Gain 20 Armor Rating while not on cooldown. Inflict frostbite on melee attackers, causing them to suffer -20% Move Speed Bonus and -20% Action Speed for 0.5s.' },
            { name: 'Mana Surge', image: 'assets/wizard/Mana_Surge.png', description: 'Gain 10% Magical Power Bonus.' },
            { name: 'Melt', image: 'assets/wizard/Melt.png', description: 'When you deal magical Fire Damage to a target, they suffer -10% Physical Damage Reduction for 5s.' },
            { name: 'Quick Chant', image: 'assets/wizard/Quick_Chant.png', description: 'Gain 15% Spell Casting Speed.' },
            { name: 'Reactive Shield', image: 'assets/wizard/Reactive_Shield.png', description: 'When you take damage, gain a 15 Base Shield (0% Scaling) for 3s. The shield will reactivate after 12s.' },
            { name: 'Sage', image: 'assets/wizard/Sage.png', description: 'Gain 10% Knowledge Bonus.' },
            { name: 'Spell Overload', image: 'assets/wizard/Spell_Overload.png', description: 'Suffer -20% Knowledge Bonus but in turn, gain 60% Max Spell Count Bonus, rounded down.' },
            { name: 'Staff Mastery', image: 'assets/wizard/Staff_Mastery.png', description: 'When using a staff-type weapon, you gain 2 Buff Magical Damage as Base damage.' }
        ],
        abilities: [
			{ name: 'Arcane Shield', image: 'assets/wizard/Skill_Arcane_Shield.png', description: 'Gain a 15 Base Shield (50% Scaling) for 12s. When the maximum amount is absorbed, the shield unleashes an Arcane Explosion, dealing 5 Arcane Arcane Magical Base Damage (100% Scaling) to enemy targets in a 2m radius around you.' },
            { name: 'Intense Focus', image: 'assets/wizard/Skill_Intense_Focus.png', description: 'Reduce the cast time of your next spell to 0.1s.' },
            { name: 'Meditation', image: 'assets/wizard/Skill_Forceful_Shot.png', description: 'Enter a meditative state and recover spells at a rate of 34 spell cost per 0.75s over 24s.' }
        ]
    },
    Cleric: {
        perks: [
			{ name: 'Advanced Healer', image: 'assets/cleric/Advanced_Healer.png', description: 'Gain 5 Outgoing Magical Healing Add.' },
            { name: 'Blunt Weapon Mastery', image: 'assets/cleric/Blunt_Weapon_Mastery.png', description: 'While using a Mace, gain 10% Physical Power Bonus.' },
            { name: 'Brewmaster', image: 'assets/cleric/Brewmaster.png', description: 'When you drink alcohol, you no longer exhibit the detrimental drunk effects and gain 10 Strength.' },
            { name: 'Faithfulness', image: 'assets/cleric/Faithfulness.png', description: 'Gain 15% Divine Power Bonus. When a Divine attack is successful, cause the target to suffer -15% Move Speed Bonus for 1.5s.' },
            { name: 'Holy Aura', image: 'assets/cleric/Holy_Aura.png', description: 'Gain 15 Armor Rating and 15 Magical Resistance. This effects both yourself and allies within 6m.' },
            { name: 'Holy Water', image: 'assets/cleric/Holy_Water.png', description: 'Drinking any of the drinks will eliminate all removable curse effects.' },
            { name: 'Kindness', image: 'assets/cleric/Kindness.png', description: 'Heal yourself for 15% of the spell total heal amount when healing another character.' },
            { name: 'Over Healing', image: 'assets/cleric/Over_Healing.png', description: 'If the target would be healed for more than their missing health, the extra magical healing will be received as bonus health up to 20% of the targets maximum health. This bonus health decays at -1% Percent Max Health Healing per second.' },
            { name: 'Perseverance', image: 'assets/cleric/Perseverance.png', description: 'Reduces all incoming damage by 2 Physical Absolute Reduction/2 Magical Absolute Reduction.' },
            { name: 'Protection from Evil', image: 'assets/cleric/Protection_from_Evil.png', description: 'Gain -30% Debuff Duration Bonus.' },
            { name: 'Requiem', image: 'assets/cleric/Requiem.png', description: 'Resurrecting an ally revives them with -50% HP lost. When reviving an ally at an Altar of Sacrifice, you do not sacrifice any of your own health.' },
            { name: 'Undead Slaying', image: 'assets/cleric/Undead_Slaying.png', description: 'Gain 20% Undead Race Damage Bonus.' }
        ],
        abilities: [
			{ name: 'Divine Protection', image: 'assets/cleric/Skill_Divine_Protection.png', description: 'Receive the blessing of the divine and gain 30% Physical Damage Reduction for 4s.' },
            { name: 'Holy Purification', image: 'assets/cleric/Skill_Holy_Purification.png', description: 'After casting for 1.5s, deal 100 Divine Magical Base Damage to all Undead Monsters within 7.5m.' },
            { name: 'Judgement', image: 'assets/cleric/Skill_Judgement.png', description: 'After channeling for 0.75s, instantly deal 25 Divine Magical Base Damage to a target within 5m and cause them to suffer -30% Move Speed Bonus for 2s.' },
            { name: 'Smite', image: 'assets/cleric/Skill_Smite.png', description: 'When activated, your melee physical attacks deal an additional instance of 10 Divine Divine Magical Base Damage for 7s.' }
        ]
    },
    Bard: {
        perks: [
			{ name: 'Charismatic Performance', image: 'assets/bard/Charismatic_Performance.png', description: 'Upgrades a good performance into a perfect performance.' },
            { name: 'Dancing Feet', image: 'assets/bard/Dancing_Feet.png', description: 'Gain 10 Move Speed Add when holding an instrument.' },
            { name: 'Fermata', image: 'assets/bard/Fermata.png', description: 'Gain 5 Resourcefulness.' },
            { name: 'Jolly Time', image: 'assets/bard/Jolly_Time.png', description: 'Drinking Ale recovers 5 Physical Base Healing (100% Scaling) and grants 10 Move Speed Add when drunk.' },
            { name: 'Lore Mastery', image: 'assets/bard/Lore_Mastery.png', description: 'A high level of understanding of objects grants you 25% Regular Interaction Speed.' },
            { name: 'Melodic Protection', image: 'assets/bard/Melodic_Protection.png', description: 'While playing songs, gain 30% Physical Damage Reduction.' },
            { name: 'Rapier Mastery', image: 'assets/bard/Rapier_Mastery.png', description: 'When a rapier is equipped, gain 2 Physical Buff Weapon Damage and 5% Action Speed.' },
            { name: 'Reinforced Instruments', image: 'assets/bard/Reinforced_Instruments.png', description: 'Gain 50% Physical Power Bonus when attacking with a musical instrument as a weapon.' },
            { name: 'Story Teller', image: 'assets/bard/Story_Teller.png', description: 'Give all party members within 6m 3 Will and 3 Knowledge.' },
            { name: 'Superior Dexterity', image: 'assets/bard/Superior_Dexterity.png', description: 'Gain 50% Item Equip Speed Bonus when switching between weapons/utility items.' },
            { name: 'Wanderers Luck', image: 'assets/bard/Wanderers_Luck.png', description: 'Increases the chances of finding high-quality items when opening treasure chests by gaining 50 Luck.' },
            { name: 'War Song', image: 'assets/bard/War_Song.png', description: 'Successfully performed songs grant 3 Physical Buff Weapon Damage to yourself and allies within 6m for 6s.' }
        ],
        abilities: [
			{ name: 'Dissonance', image: 'assets/bard/Skill_Dissonance.png', description: 'Creates an unpleasant noise to block hostile targets within a 6m area from casting spells, Silencing them for 3s.' },
            { name: 'Encore', image: 'assets/bard/Skill_Encore.png', description: 'The next song is automatically played to the end without any input and is sure to succeed. Gain 100% Manual Dexterity on this song, though capped to 50%.' },
            { name: 'Party Maker', image: 'assets/bard/Skill_Party_Maker.png', description: 'Remove drunk effect from self and all allies within 6m.' }
        ]
    },
    Warlock: {
        perks: [
			{ name: 'Antimagic', image: 'assets/warlock/Antimagic.png', description: 'Gain 25% Damage Reduction against all Magical Elements except Divine, Curse, and Neutral.' },
            { name: 'Curse Mastery', image: 'assets/warlock/Curse_Mastery.png', description: 'Gain additional base duration towards all curses you cast.' },
            { name: 'Dark Enhancement', image: 'assets/warlock/Dark_Enhancement.png', description: 'Gain 10% Dark Power Bonus towards dark magic spells.' },
            { name: 'Dark Reflection', image: 'assets/warlock/Dark_Reflection.png', description: 'While active, reflect 10 Dark Dark Magical Base Damage (75% Scaling) to the melee attacker. Does not reflect while on cooldown.' },
            { name: 'Demon Armor', image: 'assets/warlock/Demon_Armor.png', description: 'Gain the ability to equip plate armor. Suffer -10% Spell Casting Speed.' },
            { name: 'Immortal Lament', image: 'assets/warlock/Immortal_Lament.png', description: 'Casting spells will no longer take you below 1 health.' },
            { name: 'Infernal Pledge', image: 'assets/warlock/Infernal_Pledge.png', description: 'Gain 25% Undead Race Damage Reduction and 25% Demon Race Damage Reduction.' },
            { name: 'Malice', image: 'assets/warlock/Malice.png', description: 'Gain 10% Will Bonus.' },
            { name: 'Shadow Touch', image: 'assets/warlock/Shadow_Touch.png', description: 'Dealing physical damage to an enemy with melee weapon deals 2 Dark True Magical Base Damage and heals you for 2 Magical Base Healing (0% Scaling).' },
            { name: 'Soul Collector', image: 'assets/warlock/Soul_Collector.png', description: 'When you deal the final blow to an enemy, one darkness shard is collected. Gain 20% Dark Power Bonus for each shard collected, up to a maximum of 5 shards. When a dark magic spell is cast, consume all collected shards. The spell that consumes the shards receives the bonus' },
            { name: 'Torture Mastery', image: 'assets/warlock/Torture_Mastery.png', description: 'All curses inflicted upon enemies restores 2 Magical Base Healing (10% Scaling) to the caster with each instance of damage dealt. All spells cost 2x' },
            { name: 'Vampirism', image: 'assets/warlock/Vampirism.png', description: 'Gain 20% Outgoing Magical Healing Mod.' }
        ],
        abilities: [
			{ name: 'Blood Pact', image: 'assets/warlock/Skill_Blood_Pact.png', description: 'Assimilate the contracted demon after casting for 0.3s, and transform into a demon form (total transformation animation of about 3s). While in this form, gain an additional 50 Max Health Add.' },
            { name: 'Blow of Corruption', image: 'assets/warlock/Skill_Blow_of_Corruption.png', description: 'Your next physical attack within 8s deals 12 Evil Evil Magical Base Damage (75% Scaling) to the target and causes them to suffer -80% Incoming Physical Healing Mod and -80% Incoming Magical Healing Mod for 12s.' },
            { name: 'Dark Offering', image: 'assets/warlock/Skill_Dark_Offering.png', description: 'Channel your mind for up to 10s, sacrificing -10% Percent Max Health Healing per 1s to gain 5% Physical Power Bonus and 5% Magical Power Bonus per stack, up to 10 stacks. This bonus lasts for 15s.' },
            { name: 'Phantomize', image: 'assets/warlock/Skill_Phantomize.png', description: 'Phase through melee attacks and projectiles and become untargeteable for 6s. While active, gain 5% Move Speed Bonus and suffer -50% Magical Damage Reduction. During this period you can only move and do not collide with other players or monsters, but are still vulnerable to AoE damage.' }
        ]
    },
    Druid: {
        perks: [
			{ name: 'Dreamwalk', image: 'assets/druid/Dreamwalk.png', description: 'When you take damage while in human form, gain 5 Magical Power for 3s and become spiritual, phasing through targets and becoming invulnerable, but being unable to attack and use skills while still able to cast spells. 18s Cooldown in the form of a Debuff.' },
            { name: 'Enhanced Wildness', image: 'assets/druid/Enhanced_Wildness.png', description: 'While in animal form, gain 5 Move Speed Add and 10 Armor Rating.' },
            { name: 'Force of Nature', image: 'assets/druid/Force_of_Nature.png', description: 'When Druid heals anyone (including self) and they are not at maximum health they gain 3 Physical Power for 3s on each tick of received healing.' },
            { name: 'Herbal Sensing', image: 'assets/druid/Herbal_Sensing.png', description: 'Detect nearby herbs. 6m radius.' },
            { name: 'Natural Healing', image: 'assets/druid/Natural_Healing.png', description: 'Heal yourself and nearby allies 1 Magical Base Healing (10% Scaling) every 3s. 6m radius.' },
            { name: 'Shapeshift Mastery', image: 'assets/druid/Shapeshift_Mastery.png', description: 'Allows you to change Shapeshift form instantly, bypassing cast time entirely.' },
            { name: 'Spirit Bond', image: 'assets/druid/Spirit_Bond.png', description: 'You transfer 15% of Damage received by a party member within 6m to yourself, up to 20 damage per instance. 1s Cooldown in the form of a Debuff.' },
            { name: 'Spirit Magic Mastery', image: 'assets/druid/Spirit_Magic_Mastery.png', description: 'When you cast Spirit magic, gain 10 Magical Power.' },
            { name: 'Sun and Moon', image: 'assets/druid/Sun_and_Moon.png', description: 'Nearby allies and self gain 3 Vigor and 5 Magical Power. 6m radius.' },
            { name: 'Thorn Coat', image: 'assets/druid/Thorn_Coat.png', description: 'When melee attacked, return 5 True Physical Base Damage to the attacker.' }
        ],
        abilities: []
    }
};

let selectedClass = '';
const maxSlots = 4;
let allocatedPerks = [];

// Update perks display based on selected class
function updatePerks() {
    const classSelect = document.getElementById('class');
    selectedClass = classSelect.value;
    const perksDiv = document.getElementById('perks');
    

    perksDiv.innerHTML = ''; // Clear previous perks
    if (selectedClass && classes[selectedClass] && classes[selectedClass].perks) {
        classes[selectedClass].perks.forEach(perk => {
            // Check if the perk is already allocated
            if (!allocatedPerks.some(allocated => allocated.name === perk.name)) {
                const perkDiv = document.createElement('div');
                perkDiv.classList.add('perk');
                perkDiv.onclick = () => allocatePerk(perk); // Allocate perk on click

                const perkImage = document.createElement('img');
                perkImage.src = perk.image;
                perkImage.alt = perk.name;

                const perkName = document.createElement('p');
                perkName.textContent = perk.name;

                perkDiv.appendChild(perkImage);
                perkDiv.appendChild(perkName); // Add perk name
                perksDiv.appendChild(perkDiv);
            }
        });
    }
}

// Allocate perk to the first free slot
function allocatePerk(perk) {
    if (allocatedPerks.length < maxSlots) {
        allocatedPerks.push(perk);
        updateSlotsDisplay(); // Update the slots display
        updatePerks(); // Update the perks list to hide the allocated perk
    } else {
        alert("You can only allocate up to 4 perks."); // Alert if all slots are full
    }
}

// Update the display of perk slots
function updateSlotsDisplay() {
    const slotsDiv = document.getElementById('perk-slots');
    slotsDiv.innerHTML = ''; // Clear previous slots display

    allocatedPerks.forEach((perk, index) => {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('perk'); // Use the same class for styling
        
        // Right-click event to remove perk
        slotDiv.oncontextmenu = (event) => {
            event.preventDefault(); // Prevent the context menu from appearing
            removePerk(index); // Remove perk from the slot
        };

        const perkImage = document.createElement('img');
        perkImage.src = perk.image;
        perkImage.alt = perk.name;

        const perkName = document.createElement('p');
        perkName.textContent = perk.name;

        slotDiv.appendChild(perkImage);
        slotDiv.appendChild(perkName);
        slotsDiv.appendChild(slotDiv);
    });
}

// Remove perk from a specific slot
function removePerk(index) {
    allocatedPerks.splice(index, 1); // Remove perk from allocatedPerks array
    updateSlotsDisplay(); // Refresh the display
    updatePerks(); // Refresh the perks list to show the removed perk again
}

// Call this function to ensure the perk slots section is included in your HTML
function createSlotSection() {
    const slotsDiv = document.createElement('div');
    slotsDiv.id = 'perk-slots';
    slotsDiv.classList.add('perk-slots'); // Add CSS class for styling
    document.body.appendChild(slotsDiv);
}

// Initialize the slot section when the script runs
createSlotSection();