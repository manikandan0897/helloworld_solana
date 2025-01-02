use anchor_lang::prelude::*;

declare_id!("3GENMVJXFQS53r67HPSB97ngtEifWucJtWDSRhkZzmgk");

#[program]
pub mod helloworld {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
