import { Module, VuexModule, Mutation, Action, MutationAction, getModule } from 'vuex-module-decorators';
import rootStore from '~/store/index';

@Module({ dynamic: true, store: rootStore, name: 'sample', namespaced: true })
export class SampleStore extends VuexModule {
  count: number = 0;

  @Mutation
  set(val: number) {
    this.count = val;
  }

  @Action
  increment(val: number) {
    this.set(this.count + val);
  }
 
  get double(): number {
    return this.count * 2;
  }
};

export const sampleStore:SampleStore = getModule(SampleStore, rootStore);