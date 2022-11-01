import AppDataSource from "../config/connectDB"
import { AccountEntity } from "../entity/accountEntity"
import { AccountDto,  RegisterAccountDto} from '../dtos/accountDTO';


const accountRepository = AppDataSource.getRepository(AccountEntity)
class AuthService{
    public async login(dataAccount: AccountDto): Promise<any> {

        const account: any= await accountRepository.findOne({where: {email: dataAccount.email}})
            return account;
    }


    public async create(data:RegisterAccountDto): Promise<AccountEntity> {
        try{
            if (!data) throw console.error('Data is empty');

            const findAccount = await accountRepository.findOne({ where: { email: data.email } });
            if (findAccount) throw console.error( `This email ${data.email} already exists`);

            const createUserData = await accountRepository.create({ ...data }).save();
            return createUserData;
        }catch(error) {
            throw null;
        }  
    }
}

export default AuthService;