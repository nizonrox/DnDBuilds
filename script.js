const classes = {
    Fighter: {
        perks: [
            { name: 'Adrenaline Spike', image: 'assets/fighter/Adrenaline_Spike.png', description: 'When your health goes below 40%, gain 15% Action Speed for 12s.' },
            { name: 'Barricade', image: 'assets/fighter/Barricade.png', description: 'While in defensive stance, gain 50 Armor Rating and 50 Magical Resistance.' },
            { name: 'Combo Attack', image: 'assets/fighter/Combo_Attack.png', description: 'When you successfully melee attack consecutively within 2s, gain 10% Physical Power Bonus for 2s.' },
            { name: 'Counterattack', image: 'assets/fighter/Counterattack.png', description: 'When you successfully block an attack, gain 10% Move Speed Bonus and 10% Action Speed for 3s.' },
            { name: 'Defense Mastery', image: 'assets/fighter/Defense_Expert.png', description: 'Gain an additional 10% Item Armor Rating Bonus from equipped armor.' },
            { name: 'Dual Wield', image: 'assets/fighter/Dual_Wield.png', description: 'While you have weapons equipped in both hands, gain 10% Action Speed.' },
            { name: 'Projectile Resistance', image: 'assets/fighter/Projectile_Resistance.png', description: 'Gain 10% Projectile Damage Reduction.' },
            { name: 'Shield Mastery', image: 'assets/fighter/Shield_Expert.png', description: 'While in defensive stance, gain 10% Move Speed Bonus. When you successfully block an attack, gain 50% Action Speed towards your next block or attack.' },
            { name: 'Slayer', image: 'assets/fighter/Slayer.png', description: 'While holding a weapon in each hand, gain 5 Physical Buff Weapon Damage and lose the ability to equip plate armor.' },
            { name: 'Swift', image: 'assets/fighter/Swift.png', description: 'ain -30% Armor Speed Penalty Bonus. Not applicable to additional speed modifiers.' },
            { name: 'Sword Mastery', image: 'assets/fighter/Sword_Mastery.png', description: 'When using a Sword-type weapon, gain 2 Physical Buff Weapon Damage and 5% Action Speed. Also gain 10 Move Speed Add when taking a defensive stance with your sword.' },
            { name: 'Weapon Mastery', image: 'assets/fighter/Weapon_Mastery.png', description: 'Gain the ablity to use any weapon. While using non-native weapon to your class, lose -10% Physical Power Bonus on the weapon.' }
        ],
        abilities: [
            { name: 'Adrenaline Rush', image: 'assets/fighter/Skill_Adrenaline_Rush.png', description: 'Gain 15% Action Speed for 8s. After the duration ends, lose -8% Action Speed and -4% Move Speed Bonus for 2s.' },
            { name: 'Breakthrough', image: 'assets/fighter/Skill_Breakthrough.png', description: 'Remove and become immune to Debuffs that slow move speed and become knockback immune for 10s.' },
            { name: 'Perfect Block', image: 'assets/fighter/Skill_Perfect_Block.png', description: 'Gain 5 Impact Resistance for 6s.' },
            { name: 'Second Wind', image: 'assets/fighter/Skill_Second_Wind.png', description: 'Recover 40% Percent Max Health Healing over 12s. Additionally, Second Wind removes the negative effects of the Adrenaline Rush.' },
            { name: 'Shield Slam', image: 'assets/fighter/Skill_Shield_Slam.png', description: 'When using a shield, perform a shield bash attack that actively blocks and deals 25 Physical Damage (100% Scaling) and decreases the victims Move Speed Bonus by -20% for 2 seconds after knocking them backwards.' },
            { name: 'Sprint', image: 'assets/fighter/Skill_Sprint.png', description: 'Gain 3 stacks of Momentum, granting 15 Move Speed Add per stack. Lose 1 stack every 2s.' },
            { name: 'Taunt', image: 'assets/fighter/Skill_Taunt.png', description: 'ncreases the aggro value to all monsters within a 7.5m area by 50%. Gain 10% Physical Damage Reduction and 10% Magical Damage Reduction for 8s.' },
            { name: 'Victory Strike	', image: 'assets/fighter/Skill_Victory_Strike.png', description: 'Your next attack within 10s deals an additional 20% Physical Power Bonus. If the target dies from this attack, heal for 15% Percent Max Health Healing.' }
        ]
    },
	Barbarian: {
        perks: [
			{ name: 'Weapon Mastery', image: 'assets/fighter/Weapon_Mastery.png', description: 'Gain the ablity to use any weapon. While using non-native weapon to your class, lose -10% Physical Power Bonus on the weapon.' }
        ],
        abilities: [
			{ name: 'Victory Strike	', image: 'assets/fighter/Skill_Victory_Strike.png', description: 'Your next attack within 10s deals an additional 20% Physical Power Bonus. If the target dies from this attack, heal for 15% Percent Max Health Healing.' }
        ]
    }
};

let selectedClass = '';

function updatePerks() {
    const classSelect = document.getElementById('class');
    selectedClass = classSelect.value;
    
    if (selectedClass && classes[selectedClass]) {
        alert('Fighter selected');
    }
};

